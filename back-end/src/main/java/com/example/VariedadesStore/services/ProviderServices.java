package com.example.VariedadesStore.services;

import com.example.VariedadesStore.models.ProviderModel;
import com.example.VariedadesStore.repositories.ProviderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProviderServices {
    @Autowired
    ProviderRepository providerRepository; 

    public List<ProviderModel> obtenerTodo(){
        return providerRepository.findAll();
    }

    public ProviderModel crearProveedor(ProviderModel provider){
        return providerRepository.save(provider);
    }

    public ProviderModel actualizarProveedor(ProviderModel provider){
        if(provider.getId() != null){
            return providerRepository.save(provider);
        }
        return null;
    }

    public void borrarTrabajor(Long id){
        providerRepository.deleteById(id);
    }
}
