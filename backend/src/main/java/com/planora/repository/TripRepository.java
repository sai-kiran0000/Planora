package com.planora.repository;

import com.planora.entity.Trip;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TripRepository extends JpaRepository<Trip, Long> {

    List<Trip> findByUserId(Long userId);

    List<Trip> findByStatus(String status);

    List<Trip> findByUserIdAndStatus(Long userId, String status);
}
