package com.example.VariedadesStore.controllers;

import com.example.VariedadesStore.models.ProviderModel;
import com.example.VariedadesStore.services.ProviderServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/var-store/providers")
@CrossOrigin("*")

public class ProviderController {
    @Autowired
    ProviderServices providerServices;

    @GetMapping("/all")
    public List<ProviderModel> obtenerTodo(){
        return providerServices.obtenerTodo();
    }

    @PostMapping("/crear")
    public ProviderModel crearProveedor(@RequestBody ProviderModel provider){
        return providerServices.crearProveedor(provider);
    }

    @PutMapping("/actualizar")
    public ProviderModel actualizarTrabajor(@RequestBody ProviderModel provider){
        return providerServices.actualizarProveedor(provider);
    }

    @DeleteMapping("/eliminar/{id}")
    public void borrarCliente(@PathVariable long id){
        providerServices.borrarTrabajor(id);
    }
}
