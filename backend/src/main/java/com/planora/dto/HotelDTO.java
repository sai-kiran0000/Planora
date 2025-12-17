package com.planora.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class HotelDTO {

    private Long id;
    private String name;
    private String location;
    private Double pricePerNight;
    private Double rating;
    private String amenities;
    private String imageUrl;
}
