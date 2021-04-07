package com.example.demo.model.response;
public class ProductResponseModel {

    private String productId;
    private String name;
    private int cost;
    private String category;

    public String getProductId() {return this.productId;}

    public void setProductId(String productId) {
        this.productId = productId;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getCost() {
        return this.cost;
    }

    public void setCost(int cost) {
        this.cost = cost;
    }

    public String getCategory() {
        return this.category;
    }

    public void setCategory(String category) {
        this.category = category;
    }
}
