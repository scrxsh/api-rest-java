package com.example.VariedadesStore.repositories;

import com.example.VariedadesStore.models.ProviderModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProviderRepository extends JpaRepository<ProviderModel, Long> {

}
