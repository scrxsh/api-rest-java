package com.example.VariedadesStore.repositories;

import com.example.VariedadesStore.models.WorkerModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface WorkerRepository extends JpaRepository<WorkerModel, Long> {

}
