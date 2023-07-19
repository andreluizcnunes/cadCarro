import React from "react";

const Formulario = () => {
    return (
        <form className="row g-3">
            <h2>Cadastro de Carro</h2>

            <div class="col-md-6">
                <label for="fabricante" class="form-label">Fabircante:</label>
                <select id="fabricante" class="form-select" name="fabricante">
                    <option selected value="Audi">Audi</option>
                    <option value="BMW">BMW</option>
                    <option value="CAOA-Chery">CAOA Chery</option>
                    <option value="Chevrolet">Chevrolet</option>
                    <option value="Citroen">Citroen</option>
                    <option value="Fiat">Fiat</option>
                    <option value="Ford">Ford</option>
                    <option value="Honda">Honda</option>
                    <option value="Hyundai">Hyundai</option>
                    <option value="Jeep">Jeep</option>
                    <option value="Mercedes-Benz">Mercedes Benz</option>
                    <option value="Nissan">Nissan</option>
                    <option value="Peugeot">Peugeot</option>
                    <option value="Renault">Renault</option>
                    <option value="Toyota">Toyota</option>
                    <option value="Volkswagen">Volkswagen</option>
                </select>
            </div>

            <div className="col-md-6">
                <label htmlFor="modelo" className="form-label">Modelo:</label>
                <input type="email" id="modelo" name="modelo" className="form-control" />
            </div>

            <div className="col-md-6">
                <label htmlFor="ano" className="form-label">Ano:</label>
                <input type="number" id="ano" name="ano" className="form-control" />
            </div>

            <div className="col-md-6">
                <label htmlFor="tipoCombustivel" className="form-label">Tipo Combustivel:</label>
                <input type="text" id="tipoCombustivel" name="tipoCombustivel" className="form-control" />
            </div>

            <div className="col-md-4">
                <label htmlFor="motor" className="form-label">Motor:</label>
                <input type="text" id="motor" name="motor" className="form-control" />
            </div>

            <div className="col-md-4">
                <label htmlFor="potencia" className="form-label">Potencia:</label>
                <input type="text" id="potencia" name="potencia" className="form-control" />
            </div>

            <div className="col-md-4">
                <label htmlFor="transmissao" className="form-label">Transmissao:</label>
                <input type="text" id="transmissao" name="transmissao" className="form-control" />
            </div>

            <div className="d-flex gap-3">
                <input type="button" value='Cadastrar' className="btn btn-primary col-md-2"/>            
                <input type="button" value='Alterar' className="btn btn-warning col-md-2"/>
                <input type="button" value='Remover' className="btn btn-danger col-md-2"/>
                <input type="button" value='Cancelar' className="btn btn-secondary col-md-2"/>
            </div>
            
            
        </form>
    );
};

export default Formulario;