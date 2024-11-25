package com.brandonhxrr.amadeus.services;

import com.brandonhxrr.amadeus.model.AirportsResponse;
import com.brandonhxrr.amadeus.model.FlightsResponse;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.util.UriBuilder;
import reactor.core.publisher.Mono;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Comparator;
import java.util.Date;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
public class FlightService {

    private final AuthService authService;
    private final WebClient webClient;

    public FlightService(AuthService authService) {
        this.authService = authService;
        this.webClient = WebClient.builder()
                .codecs(configurer -> configurer.defaultCodecs().maxInMemorySize(16 * 1024 * 1024))
                .build();
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

    public Mono<FlightsResponse> searchFlights(String originLocationCode, String destinationLocationCode, String departureDate,
                                               String returnDate, int adults, String currencyCode, String sortBy, Boolean nonStop) {
        return authService.getToken()
                .flatMap(token -> webClient.get()
                        .uri(uriBuilder -> {
                            UriBuilder builder = uriBuilder
                                    .scheme("https")
                                    .host("test.api.amadeus.com")
                                    .path("/v2/shopping/flight-offers")
                                    .queryParam("originLocationCode", originLocationCode)
                                    .queryParam("destinationLocationCode", destinationLocationCode)
                                    .queryParam("departureDate", departureDate)
                                    .queryParam("adults", adults)
                                    .queryParam("currencyCode", currencyCode)
                                    .queryParam("nonStop", nonStop)
                                    .queryParam("max", 10);

                            if (returnDate != null && !returnDate.isEmpty()) {
                                builder.queryParam("returnDate", returnDate);
                            }
                            return builder.build();
                        })
                        .header("Authorization", "Bearer " + token)
                        .retrieve()
                        .bodyToMono(FlightsResponse.class)
                        .map(response -> {
                            if (sortBy != null && !sortBy.isEmpty()) {
                                applySorting(response, sortBy);
                            }
                            return response;
                        }));
    }

    private void applySorting(FlightsResponse response, String sortBy) {
        String[] sortParams = sortBy.split(":");
        if (sortParams.length != 2) return;

        String criteria = sortParams[0];
        String direction = sortParams[1];

        Comparator<FlightsResponse.FlightOffer> comparator = null;

        switch (criteria.toLowerCase()) {
            case "price":
                comparator = Comparator.comparing(offer -> Double.parseDouble(offer.getPrice().getGrandTotal()));
                break;
            case "duration":
                comparator = Comparator.comparing(offer -> offer.getItineraries().stream()
                        .mapToLong(itinerary -> parseDuration(itinerary.getDuration()))
                        .sum());
                break;
            case "departure":
                comparator = Comparator.comparing(offer -> offer.getItineraries().stream()
                        .flatMap(itinerary -> itinerary.getSegments().stream())
                        .map(segment -> parseDate(segment.getDeparture().getAt()))
                        .min(Date::compareTo)
                        .orElse(new Date(Long.MAX_VALUE)));
                break;
            default:
                break;
        }

        if (comparator != null) {
            if ("desc".equalsIgnoreCase(direction)) {
                comparator = comparator.reversed();
            }
            response.getData().sort(comparator);
        }
    }

    private long parseDuration(String duration) {
        Pattern pattern = Pattern.compile("PT(?:(\\d+)H)?(?:(\\d+)M)?");
        Matcher matcher = pattern.matcher(duration);

        if (matcher.matches()) {
            int hours = matcher.group(1) != null ? Integer.parseInt(matcher.group(1)) : 0;
            int minutes = matcher.group(2) != null ? Integer.parseInt(matcher.group(2)) : 0;
            return hours * 60 + minutes;
        }

        return 0;
    }

    private Date parseDate(String dateTime) {
        try {
            SimpleDateFormat isoFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss");
            return isoFormat.parse(dateTime);
        } catch (ParseException e) {
            e.printStackTrace();
            return new Date(Long.MAX_VALUE);
        }
    }
}
