package com.example.VariedadesStore.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Entity
@Table(name = "orders")
@AllArgsConstructor
@NoArgsConstructor
@Data

public class OrderModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private Date orderDate;
    @Column(length = 150)
    private String customer;
    @Column(nullable = false, length = 150)
    private String worker;
    @Column(nullable = false)
    private double final_price;
}
