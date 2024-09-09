package com.example.VariedadesStore.controllers;

import com.example.VariedadesStore.models.OrderModel;
import com.example.VariedadesStore.services.OrderServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("api/var-store/orders")
public class OrderController {
    @Autowired
    OrderServices orderServices;

    @GetMapping("/all")
    public List<OrderModel> obtenerTodo(){
        return orderServices.obtenerTodo();
    }

    @PostMapping("/crear")
    public OrderModel crearVenta(@RequestBody  OrderModel order){
        return orderServices.crearVenta(order);
    }

    @PutMapping("/actualizar")
    public OrderModel actualizarVenta(@RequestBody  OrderModel order){
        return orderServices.actualizarVenta(order);
    }

    @DeleteMapping("/eliminar/{id}")
    public void eliminarVenta(@PathVariable Long id){
        orderServices.borrarVenta(id);
    }
}
