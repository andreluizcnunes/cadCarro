package br.apicar.controllers;

import br.apicar.dto.CarMinDTO;
import br.apicar.models.CarModel;
import br.apicar.services.CarServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CarController {

    @Autowired
    CarServices carServices;

    @GetMapping("/listar")
    public List<CarMinDTO> listar(){
        return carServices.listCarDTO();
    }

    @PostMapping("/cadastrar")
    public ResponseEntity<?> cadastrar(@RequestBody CarModel car){
        return carServices.cadastrar(car);
    }


}
