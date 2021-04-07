package com.example.demo.model.request;

import javax.validation.constraints.Min;
import javax.validation.constraints.Size;

public class ProductRequestModel {

    @Min(0)
    private int cost;

    @Size(min=2, max=50, message="Please enter a real name")
    private String name;

    @Size(min=2, max=50, message="Please enter a real category")
    private String category;

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
