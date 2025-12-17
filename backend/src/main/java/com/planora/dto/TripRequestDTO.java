package com.planora.dto;

import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TripRequestDTO {

    @NotBlank(message = "Start city is required")
    private String startCity;

    @NotNull(message = "Start date is required")
    private LocalDate startDate;

    @NotNull(message = "End date is required")
    private LocalDate endDate;

    @Min(value = 1, message = "Number of days must be at least 1")
    private Integer numberOfDays;

    @Min(value = 1, message = "Number of travelers must be at least 1")
    private Integer numberOfTravelers;

    @NotBlank(message = "Travel type is required")
    @Pattern(regexp = "SOLO|COUPLE|FAMILY", message = "Travel type must be SOLO, COUPLE, or FAMILY")
    private String travelType;

    @NotNull(message = "Total budget is required")
    @DecimalMin(value = "0.01", message = "Budget must be greater than 0")
    private Double totalBudget;

    @NotBlank(message = "Plan type is required")
    @Pattern(regexp = "BUDGET|BALANCED|COMFORT", message = "Plan type must be BUDGET, BALANCED, or COMFORT")
    private String planType;
}
