package com.example.VariedadesStore.repositories;

import com.example.VariedadesStore.models.CustomerModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface CustomerRepository extends JpaRepository<CustomerModel,Long> {


}
