package com.example.demo.DTO.Mapper;

import com.example.demo.DTO.OrderDTO;
import com.example.demo.DTO.UserDTO;
import com.example.demo.Entity.Orders;
import com.example.demo.Entity.User;

import java.util.function.Function;

public class OrderDTOMapper implements Function<Orders, OrderDTO> {

    @Override
    public OrderDTO apply(Orders orders) {
        return new OrderDTO(
                orders.getId(),
                orders.getName(),
                orders.getAmount()
        );
    }
}
