package com.users.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.context.annotation.Configuration;


@Data
@AllArgsConstructor
public class ApiResponse<T>{
    private Status status;
    private String message;
    private T data;

}