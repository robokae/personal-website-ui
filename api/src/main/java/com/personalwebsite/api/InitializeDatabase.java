package com.personalwebsite.api;

import java.util.Collection;
import java.util.HashSet;

import com.personalwebsite.api.model.User;
import com.personalwebsite.api.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

@Component
public class InitializeDatabase implements CommandLineRunner  {

    @Autowired
    private UserRepository userRepository;

    // for development purposes
    private final String ADMIN_USERNAME = "admin";
    private final String ADMIN_PASSWORD = "password";
    
    @Override
    public void run(String... args) throws Exception {
        // create the admin user  
        Collection<SimpleGrantedAuthority> authorities = new HashSet<SimpleGrantedAuthority>();
        authorities.add(new SimpleGrantedAuthority("ADMIN"));
        
        // User admin = new User(username, password, authorities);
        User admin = new User(ADMIN_USERNAME, ADMIN_PASSWORD, authorities);

        // load the admin user into the database
        userRepository.save(admin);
    }
}
