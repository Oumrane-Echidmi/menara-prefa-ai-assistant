package com.menara.prefa.ai.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.menara.prefa.ai.dto.ChatRequest;
import com.menara.prefa.ai.exception.AiServiceException;
import com.menara.prefa.ai.service.AiService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(AiController.class)
class AiControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @MockBean
    private AiService aiService;

    @Test
    void whenValidInput_thenReturns200() throws Exception {
        ChatRequest request = new ChatRequest("Bonjour");
        when(aiService.getChatResponse("Bonjour")).thenReturn("Bonjour ! Comment puis-je vous aider ?");

        mockMvc.perform(post("/api/chat")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.response").value("Bonjour ! Comment puis-je vous aider ?"));
    }

    @Test
    void whenBlankMessage_thenReturns400() throws Exception {
        ChatRequest request = new ChatRequest("");

        mockMvc.perform(post("/api/chat")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.status").value(400))
                .andExpect(jsonPath("$.message").value("Le message ne peut pas être vide"));
    }

    @Test
    void whenMessageTooLong_thenReturns400() throws Exception {
        String longMessage = "a".repeat(2001);
        ChatRequest request = new ChatRequest(longMessage);

        mockMvc.perform(post("/api/chat")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.status").value(400))
                .andExpect(jsonPath("$.message").value("Le message ne doit pas dépasser 2000 caractères"));
    }

    @Test
    void whenAiServiceFails_thenReturns502() throws Exception {
        ChatRequest request = new ChatRequest("Test erreur");
        when(aiService.getChatResponse(anyString())).thenThrow(new AiServiceException("Erreur simulée"));

        mockMvc.perform(post("/api/chat")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isBadGateway())
                .andExpect(jsonPath("$.status").value(502))
                .andExpect(jsonPath("$.error").value("Bad Gateway"));
    }
}
