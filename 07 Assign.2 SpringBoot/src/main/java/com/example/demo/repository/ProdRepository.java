package com.example.demo.repository;

import com.example.demo.repository.entity.ProdEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProdRepository extends CrudRepository<ProdEntity, String> {

    Optional<ProdEntity> findByProductId(String productId);

    List<ProdEntity> findAll();

}
