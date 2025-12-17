package com.planora.repository;

import com.planora.entity.Destination;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DestinationRepository extends JpaRepository<Destination, Long> {

    List<Destination> findByCountry(String country);

    List<Destination> findByAverageCostLessThanEqual(Double maxCost);
}
