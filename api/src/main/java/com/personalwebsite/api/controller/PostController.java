package com.personalwebsite.api.controller;

import com.personalwebsite.api.model.Post;
import com.personalwebsite.api.repository.PostRepository;
import com.personalwebsite.api.service.postservice.PostService;
import com.personalwebsite.api.service.postservice.PostServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/posts")
public class PostController {

    @Autowired
    private PostServiceImpl postService;

    @GetMapping("/all")
    public List<Post> getAllPosts() {
        return postService.getAllPosts();
    }

    @GetMapping("/{title}")
    public Post getPostByTitle(@PathVariable String title) {
        return postService.getPostByTitle(title);
    }

    @PostMapping()
    public void createPost(HttpRequest request) {

    }

    @PutMapping()
    public void updatePost(HttpRequest request) {

    }

    @DeleteMapping
    public void deletePost(HttpRequest request) {

    }
}
