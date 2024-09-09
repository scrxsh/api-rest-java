package com.example.VariedadesStore.controllers;

import com.example.VariedadesStore.models.WorkerModel;
import com.example.VariedadesStore.services.WorkerServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/var-store/workers")
@CrossOrigin("*")
public class WorkerController {
    @Autowired
    WorkerServices workerServices;

    @GetMapping("/all")
    public List<WorkerModel> obtenerTodo(){
        return workerServices.obtenerTodo();
    }

    @PostMapping("/crear")
    public WorkerModel crearTrabajador(@RequestBody WorkerModel worker){
        return workerServices.crearTrabajador(worker);
    }

    @PutMapping("/actualizar")
    public WorkerModel actualizarTrabajor(@RequestBody WorkerModel worker){
        return workerServices.actualizarTrabajador(worker);
    }

    @DeleteMapping("/eliminar/{id}")
    public void borrarCliente(@PathVariable long id){
         workerServices.borrarTrabajor(id);
    }
}
