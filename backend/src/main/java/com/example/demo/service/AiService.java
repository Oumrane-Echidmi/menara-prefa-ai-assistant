package com.example.demo.service;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;
import java.nio.charset.StandardCharsets;

@Service
public class AiService {

    private final ChatClient chatClient;

    @Value("classpath:menara_context.txt")
    private Resource contextResource;

    public AiService(ChatClient.Builder chatClientBuilder) {
        this.chatClient = chatClientBuilder.build();
    }

    public String getChatResponse(String userMessage) {
        try {
            String systemText = contextResource.getContentAsString(StandardCharsets.UTF_8);
            return chatClient.prompt()
                    .system(systemText)
                    .user(userMessage)
                    .call()
                    .content();
        } catch (Exception e) {
            // Log the error properly in a real app
            throw new RuntimeException("Error communicating with AI service", e);
        }
    }
}
