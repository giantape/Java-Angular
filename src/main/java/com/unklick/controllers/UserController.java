package com.unklick.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import com.unklick.models.User;
import com.unklick.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public List<User> getUsers(){
        return userService.getAllUser();
    }

    @GetMapping("/{id}")
    public Optional<User> getUserById(@PathVariable Long id){
        return userService.getUserById(id);
    }

    @PostMapping
    public void addUser(@RequestBody User user){
        userService.addNewUser(user);
    }

    @PutMapping("/{id}")
    public void updateUser(@RequestBody User user, @PathVariable Long id) {
        userService.updateUser(id, user);
    }

    @DeleteMapping("/{id}")
    public void deleteEmployee(@PathVariable Long id) {
        userService.deleteUser(id);
    }
}
