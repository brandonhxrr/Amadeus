package com.brandonhxrr.amadeus.controller;

import com.brandonhxrr.amadeus.model.AirportsResponse;
import com.brandonhxrr.amadeus.model.FlightsResponse;
import com.brandonhxrr.amadeus.services.AuthService;
import com.brandonhxrr.amadeus.services.FlightService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FlightController {

    private final FlightService flightService;

    public FlightController(FlightService flightService, AuthService authService) {
        this.flightService = flightService;
    }

    @GetMapping("/amadeus/airports/search")
    public ResponseEntity<AirportsResponse> searchAirportsByName(@RequestParam String name) {
        AirportsResponse airportsResponse = flightService.searchAirportsByName(name).block();

        return new ResponseEntity<>(airportsResponse, HttpStatus.OK);
    }

    @GetMapping("/amadeus/flights/search")
    public ResponseEntity<FlightsResponse> searchFlights(@RequestParam String originLocationCode,
                                                         @RequestParam String destinationLocationCode,
                                                         @RequestParam String departureDate,
                                                         @RequestParam(required = false, defaultValue = "") String returnDate,
                                                         @RequestParam int adults,
                                                         @RequestParam String currencyCode,
                                                         @RequestParam Boolean nonStop
    ) {

        return new ResponseEntity<>(flightService.searchFlights(originLocationCode, destinationLocationCode, departureDate, returnDate, adults, currencyCode, nonStop).block(), HttpStatus.OK);
    }
}