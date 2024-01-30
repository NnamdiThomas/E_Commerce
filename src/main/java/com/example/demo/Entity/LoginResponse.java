package com.example.demo.Entity;

import com.example.demo.DTO.UserDTO;

public record LoginResponse(
        UserDTO userDTO,
        String token
) {
}
