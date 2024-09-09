package com.example.VariedadesStore.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;



@Entity
@Table(name="providers")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class ProviderModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false, length = 150)
    private String name;
    @Column(nullable = false, length = 15)
    private String cellphone;
    @Column(nullable = false, length = 45)
    private String address;
    @Column(nullable = false, length = 150)
    private String manager;




}
