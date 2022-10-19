package com.personalwebsite.api;

import java.util.Collection;
import java.util.Date;
import java.util.HashSet;

import com.personalwebsite.api.model.Post;
import com.personalwebsite.api.model.User;
import com.personalwebsite.api.repository.PostRepository;
import com.personalwebsite.api.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

@Component
public class InitializeDatabase implements CommandLineRunner  {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PostRepository postRepository;

    // For development purposes
    @Value("${blog.admin.username}")
    private String ADMIN_USERNAME;

    @Value("${blog.admin.password}")
    private String ADMIN_PASSWORD;

    @Value("${blog.admin.role}")
    private String ADMIN_ROLE;
    
    @Override
    public void run(String... args) throws Exception {
        userRepository.deleteAll();
        postRepository.deleteAll();

        Collection<SimpleGrantedAuthority> authorities = new HashSet<>();
        authorities.add(new SimpleGrantedAuthority(ADMIN_ROLE));
        User admin = new User(ADMIN_USERNAME, ADMIN_PASSWORD, authorities);

        Post post = new Post("My First Post", new Date(), "Alexander Hom", "This is my first post!");

        userRepository.save(admin);
        postRepository.save(post);
    }
}
