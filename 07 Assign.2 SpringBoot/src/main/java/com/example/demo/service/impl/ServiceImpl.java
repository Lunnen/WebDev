package com.example.demo.service.impl;

import com.example.demo.repository.ProdRepository;
import com.example.demo.repository.entity.ProdEntity;
import com.example.demo.service.Service;
import com.example.demo.shared.dto.ProdDto;
import com.example.demo.shared.Util;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@org.springframework.stereotype.Service
public class ServiceImpl implements Service {

    private final ProdRepository productRepository;
    private final Util util;

    public ServiceImpl(ProdRepository productRepository, Util util){
        this.productRepository = productRepository;
        this.util = util;
    }

    public List<ProdEntity> getProducts() {

        if (productRepository.findAll().size() > 0) return productRepository.findAll();
        else throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Selected table is empty! (has no values)");
    }

    public Optional<ProdEntity> getSpecProduct(String inputProduct_id) {
        return Optional.ofNullable(productRepository.findByProductId(inputProduct_id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "ProductID " + inputProduct_id + " doesn't exist!")));
    }

    public ProdDto addProduct(ProdDto inputIn) {

        Optional<ProdEntity> checkEntity = productRepository.findByProductId(inputIn.getProductId());

            if (checkEntity.isPresent()){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "ProductID of " + inputIn.getProductId() + " already exists!");
            }

        ProdEntity prodEntity = new ProdEntity();

        BeanUtils.copyProperties(inputIn, prodEntity);

        String inputID = Long.toString(inputIn.getId());
        String hashedProdId = util.generateHash(inputID);
        prodEntity.setProductId(hashedProdId.substring(3));

        ProdEntity prodEntityOut = productRepository.save(prodEntity);

        ProdDto DtoOut = new ProdDto();
        BeanUtils.copyProperties(prodEntityOut, DtoOut);

        return DtoOut;
    }

    @ResponseStatus(value=HttpStatus.BAD_REQUEST, reason = "A parameter's invalid")
    public void updateProduct(String product_id, ProdDto inputDto) {

        ProdEntity ProductFound = productRepository
                .findByProductId(product_id).orElseThrow( () -> new ResponseStatusException(HttpStatus.NOT_FOUND, ("id "+product_id+" doesn't exist!") ));




            //Values have to be different to be updated
            if (inputDto.getName() != null && (!inputDto.getName().equals(ProductFound.getName()) ) ){
                ProductFound.setName(inputDto.getName());
            }
            if ( inputDto.getCost() != 0 && (inputDto.getCost() != (ProductFound.getCost()) )){
                ProductFound.setCost(inputDto.getCost());
            }
            if (inputDto.getCategory() != null && (!inputDto.getCategory().equals(ProductFound.getCategory()) )){
                ProductFound.setCategory(inputDto.getCategory());
            }
            productRepository.save(ProductFound);

    }

    public void deleteProduct(String product_id) {
        Optional<ProdEntity> checkExists = productRepository.findByProductId(product_id);

        if (checkExists.isEmpty()){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Product ID " + product_id + " doesn't exist!");
        }

        productRepository.delete(checkExists.get());
    }
}
