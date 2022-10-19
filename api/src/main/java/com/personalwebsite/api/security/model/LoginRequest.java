package com.personalwebsite.api.security.model;

import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
public class LoginRequest {

    @NotNull
    private String username;
    @NotNull
    private String password;
}
