package com.personalwebsite.api.service.postservice;

import com.personalwebsite.api.model.Post;
import com.personalwebsite.api.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostServiceImpl implements PostService {

    @Autowired
    private PostRepository postRepository;

    @Override
    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    @Override
    public Post getPostById(Long postId) {
        return postRepository.getById(postId);
    }

    @Override
    public Post getPostByTitle(String title) {
        return postRepository.findByTitle(title);
    }
    @Override
    public void createPost(Post post) {
        postRepository.save(post);
    }

    @Override
    public void updatePost() {
    }

    @Override
    public void deletePost(Long postId) {
        postRepository.deleteById(postId);
    }
}
