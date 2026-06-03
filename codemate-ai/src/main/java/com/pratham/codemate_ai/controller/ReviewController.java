package com.pratham.codemate_ai.controller;

import com.pratham.codemate_ai.dto.CodeRequest;
import com.pratham.codemate_ai.service.ReviewService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class ReviewController {

    private final ReviewService reviewService;

    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    @PostMapping("/review")
    public String review(@RequestBody CodeRequest request) {
        return reviewService.reviewCode(request.getCode());
    }
}