package com.example.demo.Entity;

import com.example.demo.DTO.UserDTO;

public record RegistrationResponse(
        UserDTO userDTO,
        String token
) {
}
