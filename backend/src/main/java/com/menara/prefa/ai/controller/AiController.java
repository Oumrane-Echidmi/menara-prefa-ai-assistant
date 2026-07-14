package com.menara.prefa.ai.controller;

import com.menara.prefa.ai.dto.ChatRequest;
import com.menara.prefa.ai.dto.ChatResponse;
import com.menara.prefa.ai.service.AiService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/chat")
public class AiController {

    private final AiService aiService;

    public AiController(AiService aiService) {
        this.aiService = aiService;
    }

    @PostMapping
    public ChatResponse chat(@Valid @RequestBody ChatRequest request) {
        String response = aiService.getChatResponse(request.message());
        return new ChatResponse(response);
    }
}
