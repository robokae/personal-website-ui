package com.personalwebsite.api.model;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Post {
    
    @Id
    private Long id; 
}
