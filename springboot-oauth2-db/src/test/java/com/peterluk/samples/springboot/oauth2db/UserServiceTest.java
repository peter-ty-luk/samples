package com.peterluk.samples.springboot.oauth2db;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.jupiter.api.Assertions.*;

@RunWith(SpringRunner.class)
@DataJpaTest
public class UserServiceTest {

    @Autowired
    private UserRepository userRepository;

    @Test
    public void testFindSavedUser() {
        final String email = "email@email.com";
        User user = userRepository.findByEmail(email);
        assertTrue(user == null);

        user = User.builder()
                .id(1L)
                .firstName("FirstName")
                .lastName("LastName")
                .email(email)
                .build();
        userRepository.save(user);

        User foundUser = userRepository.findByEmail(email);
        assertEquals(foundUser, user);
    }
}