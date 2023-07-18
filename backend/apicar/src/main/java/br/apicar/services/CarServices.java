package br.apicar.services;

import br.apicar.dto.CarMinDTO;
import br.apicar.models.CarModel;
import br.apicar.repositories.CarRepository;
import br.apicar.response.CarResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarServices {

    @Autowired
    CarRepository carRepository;

    @Autowired
    CarResponse carResponse;

    public CarServices(CarRepository carRepository){
        this.carRepository = carRepository;
    }

    // listar carros DTO cadastrados
    public List<CarMinDTO> listCarDTO(){
        List<CarModel> car = carRepository.findAll();
        return car.stream().map(x -> new CarMinDTO(x)).toList();
    }

    public ResponseEntity<?> cadastrar(CarModel car){

        if(car.getFabricante().equals("")){
            carResponse.setSmsResponse("O fabricante é obrigatório.");
            return new ResponseEntity<CarResponse>(carResponse, HttpStatus.BAD_REQUEST);

        } else if (car.getModelo().equals("")) {
            carResponse.setSmsResponse("O modelo é obrigatório.");
            return new ResponseEntity<CarResponse>(carResponse, HttpStatus.BAD_REQUEST);
            
        } else if (car.getAno().equals("")) {
            carResponse.setSmsResponse("Ano é obrigatório.");
            return new ResponseEntity<CarResponse>(carResponse, HttpStatus.BAD_REQUEST);

        } else if (car.getTipoCombustivel().equals("")) {
            carResponse.setSmsResponse("Tipo de combustivel é obrigatório");
            return  new ResponseEntity<CarResponse>(carResponse, HttpStatus.BAD_REQUEST);

        } else if (car.getMotor().equals("")) {
            carResponse.setSmsResponse("Motor é obrigatorio");
            return new ResponseEntity<CarResponse>(carResponse, HttpStatus.BAD_REQUEST);

        } else if (car.getPotencia().equals("")) {
            carResponse.setSmsResponse("Potencia é obrigatorio");
            return new ResponseEntity<CarResponse>(carResponse, HttpStatus.BAD_REQUEST);

        } else if (car.getTransmissao().equals("")) {
            carResponse.setSmsResponse("Transmissão é obrigatorio");
            return new ResponseEntity<CarResponse>(carResponse, HttpStatus.BAD_REQUEST);

        }else{
            return new ResponseEntity<CarModel>(carRepository.save(car), HttpStatus.CREATED);
        }

    }
}
