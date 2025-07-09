package com.users.repo;

import com.users.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepo extends JpaRepository<User, Integer> {


    Optional<User> findByName(String username);

    Optional<User> findUserByEmail(String email);

    Optional<User> findByEmail(String email);

}
