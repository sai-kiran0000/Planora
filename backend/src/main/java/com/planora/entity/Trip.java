package com.planora.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "trips")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Trip {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_id", nullable = false)
    private Long userId;

    @Column(name = "start_city", nullable = false, length = 100)
    private String startCity;

    @Column(name = "destination_id")
    private Long destinationId;

    @Column(name = "start_date", nullable = false)
    private LocalDate startDate;

    @Column(name = "end_date", nullable = false)
    private LocalDate endDate;

    @Column(name = "number_of_days", nullable = false)
    private Integer numberOfDays;

    @Column(name = "number_of_travelers", nullable = false)
    private Integer numberOfTravelers = 1;

    @Column(name = "travel_type", nullable = false, length = 20)
    private String travelType; // SOLO, COUPLE, FAMILY

    @Column(name = "total_budget", nullable = false)
    private Double totalBudget;

    @Column(name = "plan_type", nullable = false, length = 20)
    private String planType; // BUDGET, BALANCED, COMFORT

    @Column(length = 20)
    private String status = "DRAFT"; // DRAFT, CONFIRMED, COMPLETED

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
}
