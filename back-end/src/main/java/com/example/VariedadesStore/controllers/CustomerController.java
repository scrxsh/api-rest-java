package com.example.VariedadesStore.controllers;

import com.example.VariedadesStore.models.CustomerModel;
import com.example.VariedadesStore.services.CustomerServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/var-store/customers")
@CrossOrigin("*")
public class CustomerController {

    @Autowired
    CustomerServices customerServices;

    @GetMapping("/all")
    public List<CustomerModel> obtenerTodo(){
        return customerServices.obtenerTodo();
    }

    @PostMapping("/crear")
    public CustomerModel crearCliente(@RequestBody CustomerModel customer){
        return customerServices.crearCliente(customer);
    }

    @PutMapping("/actualizar")
    public CustomerModel actualizarCliente(@RequestBody CustomerModel customer){
        return customerServices.actualizarCliente(customer);
    }

    @DeleteMapping("/eliminar/{id}")
    public void borrarCliente(@PathVariable long id){
        customerServices.borrarCliente(id);
    }


}
