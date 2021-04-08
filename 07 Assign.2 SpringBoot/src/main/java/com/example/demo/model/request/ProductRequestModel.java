package com.example.demo.model.request;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class ProductRequestModel {

    @Min(1)
    private int cost;

    @Size(min=4, max=50, message="Please enter name")
    @NotNull
    private String name;

    @Size(min=4, max=50, message="Please enter category")
    @NotNull
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
