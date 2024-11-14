package com.brandonhxrr.amadeus.model;

import lombok.*;
import java.util.ArrayList;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Airports {

    public ArrayList<Airport> data;
}
