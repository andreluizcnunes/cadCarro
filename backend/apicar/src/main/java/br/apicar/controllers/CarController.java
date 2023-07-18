package br.apicar.controllers;

import br.apicar.dto.CarMinDTO;
import br.apicar.models.CarModel;
import br.apicar.response.CarResponse;
import br.apicar.services.CarServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
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

    @PutMapping("/alterar")
    public ResponseEntity<?> alterar(@RequestBody CarModel car){
        return carServices.alterar(car);
    }

    @DeleteMapping("/deletar/{id}")
    public ResponseEntity<CarResponse> deletar(@PathVariable Long id){
        return carServices.deletar(id);
    }
}
