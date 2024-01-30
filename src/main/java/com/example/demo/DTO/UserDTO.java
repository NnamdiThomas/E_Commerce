package com.example.demo.DTO;

import com.example.demo.Entity.Enum.Roles;

public record UserDTO (
        String firstName,
        String lastName,
        String email,
        Roles role
){
}
