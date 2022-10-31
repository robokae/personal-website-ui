package com.personalwebsite.api.controller;

import com.personalwebsite.api.model.Post;
import com.personalwebsite.api.service.postservice.PostService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/posts")
public class PostController {

    private static final Logger LOGGER = LoggerFactory.getLogger(PostController.class);

    @Autowired
    private PostService postService;

    @GetMapping("/all")
    public List<Post> getAllPosts() {
        return postService.getAllPosts();
    }

    @GetMapping("/{title}")
    public Post getPostByTitle(@PathVariable String title) {
        return postService.getPostByTitle(title);
    }

    @PostMapping("/create")
    public void createPost(@RequestBody Post post) {
        LOGGER.info("Saving post: {}", post);
        postService.createPost(post);
    }

    @PutMapping()
    public void updatePost(HttpRequest request) {

    }

    @DeleteMapping
    public void deletePost(HttpRequest request) {

    }
}
