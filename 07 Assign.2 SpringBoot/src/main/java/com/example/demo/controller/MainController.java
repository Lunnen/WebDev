package com.example.demo.controller;

import com.example.demo.model.request.ProductRequestModel;
import com.example.demo.model.response.ProductResponseModel;
import com.example.demo.repository.entity.ProdEntity;
import com.example.demo.service.Service;
import com.example.demo.shared.dto.ProdDto;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("products")
public class MainController {

     private final Service prodService;
     public MainController(Service userService){ // better with dependancy (construktor) than @autowired. Cleaner code.
         this.prodService = userService;
     }

    @GetMapping
    public List<ProdEntity> getProducts() {
        return prodService.getProducts();
    }

    @GetMapping(value = "/{product_id}")
    public Optional<ProdEntity> getSpecProduct(@PathVariable("product_id") String product_id) {
        return prodService.getSpecProduct(product_id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ProductResponseModel addProduct(@Valid @RequestBody ProductRequestModel DetailsModel){

        ProdDto DtoIn = new ProdDto();
        BeanUtils.copyProperties(DetailsModel, DtoIn);

        ProdDto DtoOut = prodService.addProduct(DtoIn);

        ProductResponseModel response = new ProductResponseModel();
        BeanUtils.copyProperties(DtoOut, response);

        return response;
    }

    @PutMapping(value = "/{product_id}")
    public void updateProduct(@PathVariable("product_id") String product_id, @Valid @RequestBody ProductRequestModel userDetailsModel){

        // copy json to dto in
        ProdDto userDtoIn = new ProdDto();
        BeanUtils.copyProperties(userDetailsModel, userDtoIn);

        prodService.updateProduct(product_id, userDtoIn);

    }

    @DeleteMapping(path = "{product_id}")
    public void deleteProduct(@PathVariable("product_id") String product_id) {
        prodService.deleteProduct(product_id);
    }
}
