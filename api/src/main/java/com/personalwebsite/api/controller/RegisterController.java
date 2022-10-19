package com.personalwebsite.api.controller;

import org.springframework.http.HttpRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RegisterController {

    @PostMapping("/register")
    public ResponseEntity<String> register(HttpRequest request) {
        return ResponseEntity.ok("Register");
    }
}
