package com.example.usermanagementapplication.Service;

import com.example.usermanagementapplication.Model.User;
import com.example.usermanagementapplication.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;



@Service
public class UserService {
    @Autowired
    private UserRepo userRepo;

    public  List<User> userList(){
        return userRepo.findAll();
    }

    public User addUser(User user){
        return userRepo.save(user);
    }

    public User findUserByEmail(String email){
        return userRepo.findByEmail(email);
    }





}
