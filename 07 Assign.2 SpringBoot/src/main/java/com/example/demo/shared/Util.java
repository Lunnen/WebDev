package com.example.demo.shared;

import org.springframework.stereotype.Component;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

@Component
public class Util {

    public String generateHash(String uniqueProperty){
        try {
            MessageDigest hashFunc = MessageDigest.getInstance("SHA-256");
            byte[] digest = hashFunc.digest(uniqueProperty.getBytes());
            return digest.toString();
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
            return "can't return hash";
        }

    }
}
