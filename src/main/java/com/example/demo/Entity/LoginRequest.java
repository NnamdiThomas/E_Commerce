package com.example.demo.Entity;


public record LoginRequest(
        String email,
        String password
) {
}