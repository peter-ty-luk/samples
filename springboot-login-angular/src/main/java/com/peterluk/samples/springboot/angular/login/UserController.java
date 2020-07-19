package com.peterluk.samples.springboot.angular.login;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.security.Principal;
import java.util.Base64;
import java.util.concurrent.atomic.AtomicLong;

@RestController
@RequestMapping("/api")
public class UserController {

    @CrossOrigin
    @GetMapping("/user")
    public Principal user(Principal user) {
        System.out.println("user={}"+ user);
        return user;
    }

}
