package com.users.service;

import com.users.model.User;
import com.users.payload.ApiResponse;
import com.users.payload.Status;
import com.users.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;


    public List<User> getAllUsers() {
        return userRepo.findAll();
    }

    public ApiResponse<User> signup(User user) {
        try{
            Optional<User> users = userRepo.findByEmail((user.getEmail()));
            if(users.isPresent()){
                return new ApiResponse<>(Status.FAILED, "User Already Exists", null);
            }
            userRepo.save(user);
            return new ApiResponse<>(Status.SUCCESS, "User Registered SuccessFully", user);

        }
        catch(Exception e){
            return new ApiResponse<>(Status.REJECTED, "INTERNAL SERVER ERROR : "+e.getMessage(), null);
        }
    }

    public ApiResponse<User> login(String email, String password) {
        Optional<User> userOpt = userRepo.findUserByEmail((email));
        if (userOpt.isEmpty() || !userOpt.get().getPassword().equals(password)) {
            return new ApiResponse<>(Status.FAILED, "Invalid credentials", null);
        }
        return new ApiResponse<>(Status.SUCCESS, "Login successful", userOpt.get());
    }
}
