package com.planora.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BudgetBreakdownDTO {

    private Double travelBudget;
    private Double accommodationBudget;
    private Double foodBudget;
    private Double activitiesBudget;
    private Double totalAllocated;

    // Percentages for transparency
    private Double travelPercentage;
    private Double accommodationPercentage;
    private Double foodPercentage;
    private Double activitiesPercentage;
}
