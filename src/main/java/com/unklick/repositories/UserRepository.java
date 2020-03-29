package com.unklick.repositories;

import com.unklick.models.User;
import org.springframework.data.repository.CrudRepository;
public interface UserRepository extends CrudRepository<User, Long> {
}
