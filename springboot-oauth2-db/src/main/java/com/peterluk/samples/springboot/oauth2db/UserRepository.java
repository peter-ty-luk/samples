package com.peterluk.samples.springboot.oauth2db;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {

    @Query("select u from User u where u.email = ?1")
    User findByEmail(String email);
}
