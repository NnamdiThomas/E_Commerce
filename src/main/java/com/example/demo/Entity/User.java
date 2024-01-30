package com.example.demo.Entity;

import com.example.demo.Entity.Enum.Roles;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name = "person")
public class User implements UserDetails {
        @Id
        @SequenceGenerator(
                name = "person_sequence",
                sequenceName = "person_sequence",
                allocationSize = 1
        )
        @GeneratedValue(
                strategy = GenerationType.SEQUENCE,
                generator = "person_sequence")

        private  Long id;
        private  String firstName;
        private  String lastName;
        private  String password;
        private  String email;
        private Roles role;
        @OneToMany(cascade = CascadeType.ALL)
        private List<Orders> orders;

        @Override
        public Collection<? extends GrantedAuthority> getAuthorities() {
                return  List.of( new SimpleGrantedAuthority("User"));
        }

        @Override
        public String getUsername() {
                return email;
        }

        @Override
        public boolean isAccountNonExpired() {
                return true;
        }

        @Override
        public boolean isAccountNonLocked() {
                return true;
        }

        @Override
        public boolean isCredentialsNonExpired() {
                return true;
        }

        @Override
        public boolean isEnabled() {
                return true;
        }
}
