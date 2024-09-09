package com.example.VariedadesStore.services;


import com.example.VariedadesStore.models.WorkerModel;
import com.example.VariedadesStore.repositories.WorkerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WorkerServices {
    @Autowired
    WorkerRepository workerRepository;

    public List<WorkerModel> obtenerTodo(){
        return workerRepository.findAll();
    }

    public WorkerModel crearTrabajador(WorkerModel worker){
        return workerRepository.save(worker);
    }

    public WorkerModel actualizarTrabajador(WorkerModel worker){
        if(worker.getId() != null){
            return workerRepository.save(worker);
        }
        return null;
    }

    public void borrarTrabajor(Long id){
        workerRepository.deleteById(id);
    }
}
