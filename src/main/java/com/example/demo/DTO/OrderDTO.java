package com.example.demo.DTO;

import java.util.List;

public record OrderDTO (
        Long id ,
        List<String> name,
        List<Integer> amount
){
}
