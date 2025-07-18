package com.example.usermanagementapplication.Controller;


import com.example.usermanagementapplication.Model.User;
import com.example.usermanagementapplication.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserRepo userRepo;

    @PostMapping("/add")
    public void registerUser(@RequestBody User user){
        if(userRepo.findByEmail(user.getEmail())!=null){
            System.out.println("User already exists");
            return ;
        }
        userRepo.save(user);

    }

    @PostMapping("/login")
    public User LoginUser (@RequestBody User user){
        if(userRepo.findByEmail(user.getEmail())==null){
            System.out.println("User not exists");
        }
        User authUser = userRepo.findByEmail(user.getEmail());
        return authUser ;

    }
}
