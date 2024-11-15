package com.brandonhxrr.amadeus.services;

import com.brandonhxrr.amadeus.model.AirportsResponse;
import com.brandonhxrr.amadeus.model.FlightsResponse;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@Service
public class FlightService {

    private final AuthService authService;
    private final WebClient webClient;

    public FlightService(AuthService authService) {
        this.authService = authService;
        this.webClient = WebClient.builder().codecs(configurer -> configurer.defaultCodecs().maxInMemorySize(16 * 1024 * 1024)).build();
    }

    public Mono<AirportsResponse> searchAirportsByName(String airportName) {
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
                        .bodyToMono(AirportsResponse.class));
    }

    public Mono<FlightsResponse> searchFlights(String originLocationCode, String destinationLocationCode, String departureDate, String returnDate, int adults, String currencyCode, Boolean nonStop) {
        return authService.getToken()
                .flatMap(token -> webClient.get()
                        .uri(uriBuilder -> uriBuilder
                                .scheme("https")
                                .host("test.api.amadeus.com")
                                .path("v2/shopping/flight-offers")
                                .queryParam("originLocationCode", originLocationCode)
                                .queryParam("destinationLocationCode", destinationLocationCode)
                                .queryParam("departureDate", departureDate)
                                .queryParam("returnDate", returnDate)
                                .queryParam("adults", adults)
                                .queryParam("currencyCode", currencyCode)
                                .queryParam("nonStop", nonStop)
                                .build())
                        .header("Authorization", "Bearer " + token)
                        .retrieve()
                        .bodyToMono(FlightsResponse.class));
    }
}