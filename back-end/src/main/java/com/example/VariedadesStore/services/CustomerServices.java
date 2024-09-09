package com.example.VariedadesStore.services;

import com.example.VariedadesStore.models.CustomerModel;
import com.example.VariedadesStore.repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerServices {

    @Autowired
    CustomerRepository customerRepository;

    public List<CustomerModel> obtenerTodo(){
        return customerRepository.findAll();
    }

    public CustomerModel crearCliente(CustomerModel customer){
        return customerRepository.save(customer);
    }

    public CustomerModel actualizarCliente(CustomerModel customer){
        if(customer.getId() != null){
            return customerRepository.save(customer);
        }
        return null;
    }

    public void borrarCliente(Long id){
        customerRepository.deleteById(id);
    }

}
