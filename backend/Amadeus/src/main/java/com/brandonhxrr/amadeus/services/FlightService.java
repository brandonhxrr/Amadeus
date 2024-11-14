package com.brandonhxrr.amadeus.services;

import com.brandonhxrr.amadeus.model.Airports;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@Service
public class FlightService {

    private final AuthService authService;
    private final WebClient webClient;

    public FlightService(AuthService authService) {
        this.authService = authService;
        this.webClient = WebClient.builder().build();
    }

    public Mono<Airports> searchAirportsByName(String airportName) {
        return authService.getToken()
                .flatMap(token -> webClient.get()
                        .uri(uriBuilder -> uriBuilder
                                .scheme("https")
                                .host("test.api.amadeus.com")
                                .path("/v1/reference-data/locations")
                                .queryParam("subType", "AIRPORT")
                                .queryParam("page[limit]", "5")
                                .queryParam("keyword", airportName)
                                .build())
                        .header("Authorization", "Bearer " + token)
                        .retrieve()
                        .bodyToMono(Airports.class));
    }
}
