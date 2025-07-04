package com.users.model;



import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class RegisterUser {
    private String name;
    private String email;
    private String password;
}
