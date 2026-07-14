package com.menara.prefa.ai.service;

import com.menara.prefa.ai.exception.AiServiceException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Answers;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.core.io.Resource;
import org.springframework.test.util.ReflectionTestUtils;

import java.nio.charset.StandardCharsets;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class AiServiceTest {

    @Mock(answer = Answers.RETURNS_DEEP_STUBS)
    private ChatClient.Builder chatClientBuilder;

    @Mock(answer = Answers.RETURNS_DEEP_STUBS)
    private ChatClient chatClient;

    @Mock
    private Resource contextResource;

    private AiService aiService;

    @BeforeEach
    void setUp() {
        when(chatClientBuilder.build()).thenReturn(chatClient);
        aiService = new AiService(chatClientBuilder);
        ReflectionTestUtils.setField(aiService, "contextResource", contextResource);
    }

    @Test
    void testInitSuccessfullyLoadsContext() throws Exception {
        when(contextResource.getContentAsString(StandardCharsets.UTF_8)).thenReturn("Context data");
        
        aiService.init();
        
        String prompt = (String) ReflectionTestUtils.getField(aiService, "systemPrompt");
        assertNotNull(prompt);
        assertTrue(prompt.contains("Context data"));
        assertTrue(prompt.contains("INSTRUCTIONS STRICTES"));
    }

    @Test
    void testInitFailsThrowsException() throws Exception {
        when(contextResource.getContentAsString(StandardCharsets.UTF_8)).thenThrow(new RuntimeException("IO Error"));
        
        RuntimeException exception = assertThrows(RuntimeException.class, () -> aiService.init());
        assertTrue(exception.getMessage().contains("Failed to initialize AiService"));
    }

    @Test
    void testGetChatResponseSuccess() throws Exception {
        when(contextResource.getContentAsString(StandardCharsets.UTF_8)).thenReturn("Context data");
        aiService.init();

        when(chatClient.prompt().system(anyString()).user("Hello").call().content()).thenReturn("Response from AI");

        String response = aiService.getChatResponse("Hello");

        assertEquals("Response from AI", response);
    }

    @Test
    void testGetChatResponseFailureThrowsAiServiceException() throws Exception {
        when(contextResource.getContentAsString(StandardCharsets.UTF_8)).thenReturn("Context data");
        aiService.init();

        when(chatClient.prompt().system(anyString()).user("Hello").call().content()).thenThrow(new RuntimeException("API Down"));

        AiServiceException exception = assertThrows(AiServiceException.class, () -> aiService.getChatResponse("Hello"));
        assertEquals("Erreur lors de la communication avec le service AI.", exception.getMessage());
    }
}
