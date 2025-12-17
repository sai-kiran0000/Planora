package com.planora.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "budget_allocation")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class BudgetAllocation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "trip_id", unique = true, nullable = false)
    private Long tripId;

    @Column(name = "travel_budget", nullable = false)
    private Double travelBudget;

    @Column(name = "accommodation_budget", nullable = false)
    private Double accommodationBudget;

    @Column(name = "food_budget", nullable = false)
    private Double foodBudget;

    @Column(name = "activities_budget", nullable = false)
    private Double activitiesBudget;

    @Column(name = "total_allocated", nullable = false)
    private Double totalAllocated;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;
}
