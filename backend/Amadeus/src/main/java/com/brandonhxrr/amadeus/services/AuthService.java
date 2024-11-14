package com.brandonhxrr.amadeus.services;

import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@Service
public class AuthService {

    @Value("${amadeus.client_id}")
    private String clientId;

    @Value("${amadeus.client_secret}")
    private String clientSecret;

    private final WebClient webClient = WebClient.builder().build();

    public Mono<String> getToken() {
        return webClient.post()
                .uri("https://test.api.amadeus.com/v1/security/oauth2/token")
                .header("Content-Type", "application/x-www-form-urlencoded")
                .bodyValue("grant_type=client_credentials&client_id=" + clientId + "&client_secret=" + clientSecret)
                .retrieve()
                .bodyToMono(TokenResponse.class)
                .map(TokenResponse::getAccess_token);
    }

    @Setter
    @Getter
    private static class TokenResponse {

        private String access_token;

    }
}
