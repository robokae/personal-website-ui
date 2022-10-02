package com.personalwebsite.api.repository;

import com.personalwebsite.api.model.Post;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Long> {

    public Post findByTitle(String title);
}
