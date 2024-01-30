package com.example.demo.Service;

import com.example.demo.DTO.OrderDTO;
import com.example.demo.Entity.Orders;
import com.example.demo.Exception.OrderException;

import java.util.List;

public interface OrderService {

   // List <OrderDTO> findByEmail(String email) throws OrderException;

    Orders addOrder (Orders orders) throws OrderException;
}
