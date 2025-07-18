package com.example.usermanagementapplication.Service;

import javax.crypto.SecretKey;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class JwtService {

    @Value("{jwt.secret}")
    private String secret;
    private static final long EXPIRATION_TIME = 1000 * 60 * 60;

    private  SecretKey key;

    



}
