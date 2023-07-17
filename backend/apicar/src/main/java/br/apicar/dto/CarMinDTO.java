package br.apicar.dto;

import br.apicar.models.CarModel;
import lombok.Getter;

@Getter
public class CarMinDTO {

    private Long id;
    private String fabricante;
    private String modelo;
    private Integer ano;
    private String tipoCombustivel;
    private String motor;
    private String potencia;
    private String transmissao;

    public CarMinDTO(CarModel car) {
        id = car.getId();
        fabricante = car.getFabricante();
        modelo = car.getModelo();
        ano = car.getAno();
        tipoCombustivel = car.getTipoCombustivel();
        motor = car.getMotor();
        potencia = car.getPotencia();
        transmissao = car.getTransmissao();
    }
}
