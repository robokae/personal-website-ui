package com.personalwebsite.api.service.postservice;

import com.personalwebsite.api.model.Post;
import com.personalwebsite.api.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface PostService {

    public List<Post> getAllPosts();

    public Post getPostById(Long postId);
    public Post getPostByTitle(String title);
    public void createPost(Post post);
    public void updatePost();
    public void deletePost(Long postId);
}
