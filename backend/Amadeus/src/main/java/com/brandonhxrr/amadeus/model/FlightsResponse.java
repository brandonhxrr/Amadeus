package com.brandonhxrr.amadeus.model;

import lombok.*;
import java.util.ArrayList;
import java.util.List;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class FlightsResponse {
    private ArrayList<FlightOffer> data;

    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    @Data
    public static class FlightOffer {

        private String id;
        private String type;
        private String source;
        private int numberOfBookableSeats;
        private List<Itinerary> itineraries;
        private Price price;
        private List<TravelerPricing> travelerPrincing;

        @Builder
        @NoArgsConstructor
        @AllArgsConstructor
        @Data
        public static class Itinerary {
            private String duration;
            private List<Segment> segments;

            @Builder
            @NoArgsConstructor
            @AllArgsConstructor
            @Data
            public static class Segment {
                private String id;
                private String duration;
                private int numberOfStops;
                private boolean blacklistedInEu;
                private Location departure;
                private Location arrival;
                private String carrierCode;
                private String number;
                private Aircraft aircraft;

                @Builder
                @NoArgsConstructor
                @AllArgsConstructor
                @Data
                public static class Location {
                    private String iataCode;
                    private String terminal;
                    private String at;
                }

                @Builder
                @NoArgsConstructor
                @AllArgsConstructor
                @Data
                public static class Aircraft {
                    private String code;
                }
            }
        }

        @Builder
        @NoArgsConstructor
        @AllArgsConstructor
        @Data
        public static class Price {
            private String currency;
            private String total;
            private String base;
            private List<Fee> fees;
            private String grandTotal;

            @Builder
            @NoArgsConstructor
            @AllArgsConstructor
            @Data
            public static class Fee {
                private String amount;
                private String type;
            }
        }

        @Builder
        @NoArgsConstructor
        @AllArgsConstructor
        @Data
        public static class TravelerPricing {
            private String travelerId;
            private String fareOption;
            private String travelerType;
            private Price price;
            private List<FareDetailBySegment> fareDetailBySegment;

            @Builder
            @NoArgsConstructor
            @AllArgsConstructor
            @Data
            public static class FareDetailBySegment {
                private String segmentId;
                private String cabin;
                private String fareBasis;
                private String travelClass;
                private IncludedCheckedBags includedCheckedBags;

                @Builder
                @NoArgsConstructor
                @AllArgsConstructor
                @Data
                public static class IncludedCheckedBags {
                    private int weight;
                    private String weightUnit;
                }
            }
        }
    }
}