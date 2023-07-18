package br.apicar.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Objects;

@Entity
@Table(name = "carro")
@Getter
@Setter
public class CarModel {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String fabricante;
    private String modelo;
    private Integer ano;
    private String tipoCombustivel;
    private String motor;
    private String potencia;
    private String transmissao;
    
    public CarModel() {
    }

    public CarModel(Long id, String fabricante, String modelo, Integer ano, String segmento, Integer capacidadePessoas, String tipoCombustivel, String motor, String potencia, String transmissao, String tracao) {
        this.id = id;
        this.fabricante = fabricante;
        this.modelo = modelo;
        this.ano = ano;
        this.tipoCombustivel = tipoCombustivel;
        this.motor = motor;
        this.potencia = potencia;
        this.transmissao = transmissao;
    }
//
//    public Long getId() {
//        return id;
//    }
//
//    public void setId(Long id) {
//        this.id = id;
//    }
//
//    public String getFabricante() {
//        return fabricante;
//    }
//
//    public void setFabricante(String fabricante) {
//        this.fabricante = fabricante;
//    }
//
//    public String getModelo() {
//        return modelo;
//    }
//
//    public void setModelo(String modelo) {
//        this.modelo = modelo;
//    }
//
//    public Integer getAno() {
//        return ano;
//    }
//
//    public void setAno(Integer ano) {
//        this.ano = ano;
//    }
//
//   public String getTipoCombustivel() {
//        return tipoCombustivel;
//    }
//
//    public void setTipoCombustivel(String tipoCombustivel) {
//        this.tipoCombustivel = tipoCombustivel;
//    }
//
//    public String getMotor() {
//        return motor;
//    }
//
//    public void setMotor(String motor) {
//        this.motor = motor;
//    }
//
//    public String getPotencia() {
//        return potencia;
//    }
//
//    public void setPotencia(String potencia) {
//        this.potencia = potencia;
//    }
//
//    public String getTransmissao() {
//        return transmissao;
//    }
//
//    public void setTransmissao(String transmissao) {
//        this.transmissao = transmissao;
//    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CarModel carModel = (CarModel) o;
        return Objects.equals(id, carModel.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
