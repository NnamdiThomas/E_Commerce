package com.example.demo.Controller;


import com.example.demo.DTO.UserDTO;
import com.example.demo.Entity.*;

import com.example.demo.Service.Implementation.OrderServiceImpl;
import com.example.demo.Service.Implementation.UserServiceImpl;
import jakarta.persistence.criteria.Order;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = {"http://localhost:3000"})
@RequestMapping(path = "api/api")
public class ControllerClass {

    private final UserServiceImpl userService;
    private final OrderServiceImpl orderService;

    @GetMapping("/all")
    public List<UserDTO> get_user(){
        return userService.findUser();
    }



    @PostMapping("/register")
    public ResponseEntity<?> Add_users(@RequestBody RegistrationRequest users){

        RegistrationResponse request = userService.AddNewUser(users);
        return  ResponseEntity.ok()
                .body(request);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        LoginResponse response = userService.login(request);
        return ResponseEntity.ok()
                .header(HttpHeaders.AUTHORIZATION, response.token())
                .body(response);
    }

    @PostMapping("/order")
    public ResponseEntity<?> AddOrder(@RequestBody Orders order){
        Orders orders = orderService.addOrder(order);

        return ResponseEntity.ok()
                .body(orders);
    }


}