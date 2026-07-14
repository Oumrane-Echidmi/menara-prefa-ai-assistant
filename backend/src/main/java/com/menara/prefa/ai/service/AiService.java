package com.menara.prefa.ai.service;

import com.menara.prefa.ai.exception.AiServiceException;
import jakarta.annotation.PostConstruct;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;

@Service
public class AiService {

    private static final Logger logger = LoggerFactory.getLogger(AiService.class);

    private final ChatClient chatClient;

    @Value("classpath:menara_context.txt")
    private Resource contextResource;

    private String systemPrompt;

    public AiService(ChatClient.Builder chatClientBuilder) {
        this.chatClient = chatClientBuilder.build();
    }

    @PostConstruct
    public void init() {
        try {
            logger.info("Loading AI context from menara_context.txt...");
            String contextText = contextResource.getContentAsString(StandardCharsets.UTF_8);
            
            // Add guardrails to the base context
            this.systemPrompt = contextText + "\n\n" +
                    "INSTRUCTIONS STRICTES :\n" +
                    "- Tu es un assistant virtuel pour l'entreprise Ménara Préfa.\n" +
                    "- Tu dois répondre uniquement aux questions concernant Ménara Préfa, ses produits, services, contacts, QHSE et implantations.\n" +
                    "- Si l'utilisateur pose une question hors sujet, redirige-le poliment vers le sujet de Ménara Préfa.\n" +
                    "- Réponds dans la langue de l'utilisateur, par défaut en français.\n" +
                    "- N'invente jamais de prix, de disponibilité ou de revendications légales. Si tu ne sais pas, invite l'utilisateur à contacter le service commercial.";
                    
            logger.info("AI context loaded successfully.");
        } catch (Exception e) {
            logger.error("Failed to load AI context from resources", e);
            throw new RuntimeException("Failed to initialize AiService", e);
        }
    }

    public String getChatResponse(String userMessage) {
        try {
            logger.debug("Sending prompt to AI for user message...");
            return chatClient.prompt()
                    .system(systemPrompt)
                    .user(userMessage)
                    .call()
                    .content();
        } catch (Exception e) {
            logger.error("Error communicating with AI service: {}", e.getMessage(), e);
            throw new AiServiceException("Erreur lors de la communication avec le service AI.", e);
        }
    }
}
