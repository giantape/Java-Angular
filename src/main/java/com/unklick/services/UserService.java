package com.unklick.services;

import com.unklick.models.User;
import com.unklick.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public void addNewUser(User user){
        userRepository.save(user);
    }

    public List<User> getAllUser() {
        List<User> users = new ArrayList<>();
        userRepository.findAll().forEach(users::add);
        return users;
    }

    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    public void updateUser(Long id, User user) {
        userRepository.save(user);
    }

    //public User findUserById(Long id);
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}
