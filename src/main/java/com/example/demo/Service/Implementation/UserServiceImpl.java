package com.example.demo.Service.Implementation;

import com.example.demo.Configuration.JWT.JWT;
import com.example.demo.DTO.Mapper.UserDTOMapper;
import com.example.demo.DTO.UserDTO;
import com.example.demo.Entity.*;
import com.example.demo.Entity.Enum.Roles;
import com.example.demo.Exception.UserExceptions;
import com.example.demo.Repository.UserRepository;
import com.example.demo.Service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final UserDTOMapper userDTOMapper;
    private  final JWT jwt;
    private final AuthenticationManager authenticationManager;

    private final PasswordEncoder passwordEncoder;

    @Override
    public List<UserDTO> findUser() throws UserExceptions {
        return  userRepository.findAll()
                .stream()
                .map(userDTOMapper)
                .collect(Collectors.toList());
    }

    @Override
    public RegistrationResponse AddNewUser(RegistrationRequest add) throws UserExceptions {

        Optional<User> exist = userRepository.findByEmail(add.email());
        if (exist.isEmpty())
        {
           User user = new User();
           user.setFirstName(add.firstName());
           user.setLastName(add.lastName());
           user.setEmail(add.email());
           user.setPassword(passwordEncoder.encode(add.password()));
           user.setRole(add.role());
           userRepository.save(user);

           UserDTO userDTO = new UserDTO(add.firstName(), add.lastName(), add.email(), add.role());

            String jwtToken = jwt.issuedToken(add.email() , "Role_User");

            return new RegistrationResponse(userDTO, jwtToken);
        }
       else {
           throw new UserExceptions("Email Already Exists");
        }
    }

    public LoginResponse login(LoginRequest request){

        try{
            Authentication authentication = authenticationManager.authenticate( new UsernamePasswordAuthenticationToken(
                    request.email(),
                    request.password()
            ));
            User principal = (User) authentication.getPrincipal();

            UserDTO userDTO = userDTOMapper.apply(principal);

            String token = jwt.issuedToken(userDTO.email(), String.valueOf(userDTO.role()));

            log.info("User {} authenticated successfully", principal.getUsername());

            return new LoginResponse(userDTO , token);
        }catch (AuthenticationException e) {
            log.debug("Authentication failed: {}", e.getMessage());
            return null;
        }
    }
}
