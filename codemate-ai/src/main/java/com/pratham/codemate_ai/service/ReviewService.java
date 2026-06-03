package com.pratham.codemate_ai.service;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.stereotype.Service;

@Service
public class ReviewService {

    private final ChatClient chatClient;

    public ReviewService(ChatClient.Builder builder) {
        this.chatClient = builder.build();
    }

    public String reviewCode(String code) {

        String prompt = """
                    You are an expert Software Engineer.
                    
                    Analyze the provided source code regardless of programming language.
                    
                    Identify the language first.
                    
                    Provide a SHORT and EASY TO UNDERSTAND report.
                    
                    Format:
                    
                    🚀 Language
                    Detected language
                    
                    📖 Summary
                    What the code is trying to do
                    
                    ⚠️ Issues
                    Only real issues if present
                    
                    📏 Complexity
                    Time Complexity
                    Space Complexity
                    
                    💡 Improvements
                    3 short suggestions
                    
                    ⭐ Code Quality Score
                    Rate from 1-10
                    
                    Code:
                    """ + code;

        return chatClient.prompt()
                .user(prompt)
                .call()
                .content();
    }
}