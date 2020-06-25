package com.peterluk.samples.springboot.oauth2db;

import lombok.*;

import javax.persistence.*;

@Entity // This tells Hibernate to make a table out of this class
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @NonNull
    private Long id;

    private String firstName;
    private String lastName;
    private String email;
    private String role;

}
