package com.planora.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ActivityDTO {

    private Long id;
    private String name;
    private String description;
    private Double cost;
    private Integer durationHours;
    private String category;
    private String imageUrl;
}
