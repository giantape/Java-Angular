package com.unklick.services;

import com.unklick.models.User;
import com.unklick.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public void updateUser(User user) {
        userRepository.save(user);
    }

    //public User findUserById(Long id);
}
