package com.example.VariedadesStore.controllers;

import com.example.VariedadesStore.models.ProductModel;
import com.example.VariedadesStore.services.ProductServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/var-store/products")
@CrossOrigin("*")
public class ProductController {
    @Autowired
    ProductServices productServices;

    @GetMapping("/all")
    public List<ProductModel> obtenerTodo(){
        return productServices.obtenerTodo();
    }

    @PostMapping("/crear")
    public ProductModel crearProducto(@RequestBody  ProductModel product){
        return productServices.crearProducto(product);
    }

    @PutMapping("/actualizar")
    public ProductModel actualizarProducto(@RequestBody  ProductModel product){
        return productServices.actualizarProducto(product);
    }

    @DeleteMapping("/eliminar/{id}")
    public void eliminarProducto(@PathVariable Long id){
        productServices.borrarProducto(id);
    }


}
