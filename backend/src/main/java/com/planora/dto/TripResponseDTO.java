package com.planora.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TripResponseDTO {

    private Long tripId;
    private String startCity;
    private String destinationName;
    private LocalDate startDate;
    private LocalDate endDate;
    private Integer numberOfDays;
    private Integer numberOfTravelers;
    private String travelType;
    private Double totalBudget;
    private String planType;
    private String status;

    // Budget breakdown
    private BudgetBreakdownDTO budgetBreakdown;

    // Recommendations
    private List<HotelDTO> hotels;
    private List<ActivityDTO> activities;
}
