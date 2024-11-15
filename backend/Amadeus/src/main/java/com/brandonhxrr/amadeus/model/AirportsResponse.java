package com.brandonhxrr.amadeus.model;

import lombok.*;
import java.util.ArrayList;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class AirportsResponse {

    public ArrayList<Airport> data;

    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    @Data
    public static class Airport {

        private String name;

        private String detailedName;

        private String iataCode;
    }
}
