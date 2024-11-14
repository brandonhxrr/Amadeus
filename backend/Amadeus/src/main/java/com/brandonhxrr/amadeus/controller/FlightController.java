package com.brandonhxrr.amadeus.controller;

import com.brandonhxrr.amadeus.model.Airport;
import com.brandonhxrr.amadeus.model.Airports;
import com.brandonhxrr.amadeus.model.Flight;
import com.brandonhxrr.amadeus.services.AuthService;
import com.brandonhxrr.amadeus.services.FlightService;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FlightController {

    private final FlightService flightService;

    public FlightController(FlightService flightService, AuthService authService) {
        this.flightService = flightService;
    }

    @GetMapping("/amadeus/airports/search")
    public ResponseEntity<Airports> searchAirportsByName(@RequestParam String name) {
        Airports airports = flightService.searchAirportsByName(name).block();

        return new ResponseEntity<>(airports, HttpStatus.OK);
    }
}
