package com.example.demo.Entity;

import com.example.demo.Entity.Enum.Roles;

public record RegistrationRequest(
        String firstName,
        String lastName,
        String otherName,
        String password,
        String email,
        Roles role
) {}

