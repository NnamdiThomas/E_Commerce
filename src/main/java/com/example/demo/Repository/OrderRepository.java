package com.example.demo.Repository;

import com.example.demo.Entity.Orders;
import com.example.demo.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface OrderRepository extends JpaRepository<Orders, Long> {


}
