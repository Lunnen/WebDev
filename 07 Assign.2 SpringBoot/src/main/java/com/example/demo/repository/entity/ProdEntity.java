package com.example.demo.repository.entity;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;

@Entity(name="products")
public class ProdEntity implements Serializable {

    @Id
    @GeneratedValue
    private long id;

    @Column(length=50, unique = true, nullable = false)
    private String productId;

    @Column(length=50, nullable = false)
    private String name;

    @Column(length=20)
    private int cost;

    @Column(length=50, nullable = false)
    private String category;

    @JsonProperty("product_id")
    public String getProductId() {
        return productId;
    }

    public void setProductId(String productId) {
        this.productId  = productId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getCost() {
        return cost;
    }

    public void setCost(int cost) {
        this.cost = cost;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }
}
