package com.example.VariedadesStore.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="workers")
@Data
@AllArgsConstructor
@NoArgsConstructor


public class WorkerModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false, length = 150)
    private String name;
    @Column(nullable = false, length = 15)
    private String cellphone;
    @Column(length = 100)
    private String email;
    @Column(length = 45)
    private String charge;

}
