package com.personalwebsite.api.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

import java.util.Date;

@Data
@Entity
public class Post {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String title;
    private Date publishDate;
    private String author;
    private String body;

    public Post() {}

    public Post(String title, Date publishDate, String author, String body) {
        this.title = title;
        this.publishDate = publishDate;
        this.author = author;
        this.body = body;
    }
}
