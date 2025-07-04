package com.users.controller;


import com.users.model.LoginUser;
import com.users.model.RegisterUser;
import com.users.model.User;
import com.users.payload.ApiResponse;
import com.users.payload.Status;
import com.users.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserService userService;


    @GetMapping("/all")
    public ResponseEntity<ApiResponse<List<User>>> getAllUser(){
        try{
            List<User> allUser = userService.getAllUsers();
            if(allUser.isEmpty()){
                return  ResponseEntity.status(200).body(new ApiResponse<>(Status.FAILED, "No Users Found", new ArrayList<>() ));
            }
            return ResponseEntity.status(200).body(new ApiResponse<>(Status.SUCCESS, allUser.size() + " Data found", allUser));
        }catch(Exception e){
            return ResponseEntity.status(500).body(new ApiResponse<>(Status.REJECTED, "SERVER ERROR"+e.getMessage(), null));
        }
    }

    @PostMapping("/register")
    public ResponseEntity<ApiResponse<User>> register(@RequestBody RegisterUser registerUser) {
        ApiResponse<User> response;
        try {
            User user = new User();
            user.setName(registerUser.getName());
            user.setEmail(registerUser.getEmail());
            user.setPassword(registerUser.getPassword());

            response = userService.signup(user);

            return ResponseEntity.status(201).body(response);

        } catch (Exception e) {
            return ResponseEntity.status(500).body(new ApiResponse(Status.REJECTED, "INTERNAL SERVER ERROR:", e));
        }
    }

    @PostMapping("/login")
    public ResponseEntity<ApiResponse<User>> login(@RequestBody LoginUser user){
        ApiResponse<User> response = userService.login(user.getEmail(), user.getPassword());
        return ResponseEntity.ok(response);
    }
 }
