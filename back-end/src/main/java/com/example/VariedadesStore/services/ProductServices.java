package com.example.VariedadesStore.services;

import com.example.VariedadesStore.models.ProductModel;
import com.example.VariedadesStore.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServices {
    @Autowired
    ProductRepository productRepository;


    public List<ProductModel> obtenerTodo(){
        return productRepository.findAll();
    }

    public ProductModel crearProducto(ProductModel product){
        return productRepository.save(product);
    }

    public ProductModel actualizarProducto(ProductModel product){
        if(product.getId() != null){
            return productRepository.save(product);
        }
        return null;
    }

    public void borrarProducto(Long id){
        productRepository.deleteById(id);
    }


}
