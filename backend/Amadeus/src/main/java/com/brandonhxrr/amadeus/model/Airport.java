package com.brandonhxrr.amadeus.model;

import lombok.*;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Airport {

    private String name;

    private String detailedName;

    private String iataCode;
}
