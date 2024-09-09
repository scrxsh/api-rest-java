package com.example.VariedadesStore.services;

import com.example.VariedadesStore.models.OrderModel;
import com.example.VariedadesStore.repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServices {

    @Autowired
    OrderRepository orderRepository;

    public List<OrderModel> obtenerTodo(){
      return orderRepository.findAll();
    }

    public OrderModel crearVenta(OrderModel order){
        return orderRepository.save(order);
    }

    public OrderModel actualizarVenta(OrderModel order){
        if(order.getId() != null){
            return orderRepository.save(order);
        }
        return null;
    }

    public void borrarVenta(Long id){
        orderRepository.deleteById(id);
    }

}
