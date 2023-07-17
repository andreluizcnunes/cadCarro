package br.apicar.services;

import br.apicar.dto.CarMinDTO;
import br.apicar.models.CarModel;
import br.apicar.repositories.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarServices {

    @Autowired
    CarRepository carRepository;

    public CarServices(CarRepository carRepository){
        this.carRepository = carRepository;
    }

    // listar carros DTO cadastrados
    public List<CarMinDTO> listCarDTO(){
        List<CarModel> car = carRepository.findAll();
        return car.stream().map(x -> new CarMinDTO(x)).toList();
    }
}
