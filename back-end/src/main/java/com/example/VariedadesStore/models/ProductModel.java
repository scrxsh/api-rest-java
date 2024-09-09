package com.example.VariedadesStore.models;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity(name = "products")
@AllArgsConstructor
@NoArgsConstructor
@Data

public class ProductModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false, length = 150)
    private String name;
    @Column(nullable = false)
    private double unitPrice;
    private float percentIva;
    private int stock;
    @Column(nullable = false, length = 45)
    private String category;
    private String urlImg;
    @Column(length = 150)
    private String description;
}
