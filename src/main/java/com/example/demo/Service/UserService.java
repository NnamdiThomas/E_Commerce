package com.example.demo.Service;

import com.example.demo.DTO.UserDTO;
import com.example.demo.Entity.RegistrationRequest;
import com.example.demo.Entity.RegistrationResponse;
import com.example.demo.Exception.UserExceptions;

import java.util.List;

public interface UserService {

    List<UserDTO> findUser() throws UserExceptions;

    RegistrationResponse AddNewUser(RegistrationRequest add) throws UserExceptions;

}
