package com.example.demo.service;


import com.example.demo.repository.entity.ProdEntity;
import com.example.demo.shared.dto.ProdDto;

import java.util.List;
import java.util.Optional;

public interface Service {

    List<ProdEntity> getProducts();
    Optional<ProdEntity> getSpecProduct(String inputProduct_id);

    ProdDto addProduct(ProdDto input);
    void updateProduct(String inputProduct_id, ProdDto input);
    void deleteProduct(String inputProduct_id);
}
