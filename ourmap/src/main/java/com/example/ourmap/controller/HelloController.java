package com.example.ourmap.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HelloController {

    @GetMapping("/api/v1")
    public String hello(){
        return "test";
    }
}
