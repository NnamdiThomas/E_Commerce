package com.example.demo.Service.Implementation;

import com.example.demo.DTO.OrderDTO;
import com.example.demo.Entity.Orders;
import com.example.demo.Exception.OrderException;
import com.example.demo.Repository.OrderRepository;
import com.example.demo.Service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;


    @Override
    public Orders addOrder(Orders orders) throws OrderException {
        return orderRepository.save(orders);
    }
}
