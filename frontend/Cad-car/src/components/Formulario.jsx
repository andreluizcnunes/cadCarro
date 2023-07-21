import React from "react";

const Formulario = ({ botao, getDadosForm, cadastrar, obj, cancelar }) => {
    return (
        <form className="row g-3">
            <h2>Cadastro de Carro</h2>

            <div className="col-md-6">
            <label htmlFor="fabricante" className="form-label">Fabricante:</label>
                <input 
                    type="text" 
                    id="fabricante" 
                    name="fabricante" 
                    className="form-control" 
                    onChange={getDadosForm}
                    value={obj.fabricante}
                />
            </div>

            <div className="col-md-6">
                <label htmlFor="modelo" className="form-label">Modelo:</label>
                <input 
                    type="text" 
                    id="modelo" 
                    name="modelo" 
                    className="form-control" 
                    onChange={getDadosForm}
                    value={obj.modelo}
                />
            </div>

            <div className="col-md-6">
                <label htmlFor="ano" className="form-label">Ano:</label>
                <input 
                    type="number" 
                    id="ano" 
                    name="ano" 
                    className="form-control" 
                    onChange={getDadosForm}
                    value={obj.ano}
                />
            </div>

            <div className="col-md-6">
                <label htmlFor="tipoCombustivel" className="form-label">Tipo Combustivel:</label>
                <input 
                    type="text" 
                    id="tipoCombustivel" 
                    name="tipoCombustivel" 
                    className="form-control" 
                    onChange={getDadosForm}
                    value={obj.tipoCombustivel}
                />
            </div>

            <div className="col-md-4">
                <label htmlFor="motor" className="form-label">Motor:</label>
                <input 
                    type="text" 
                    id="motor" 
                    name="motor" 
                    className="form-control" 
                    onChange={getDadosForm}
                    value={obj.motor}
                />
            </div>

            <div className="col-md-4">
                <label htmlFor="potencia" className="form-label">Potencia:</label>
                <input 
                    type="text" 
                    id="potencia" 
                    name="potencia" 
                    className="form-control" 
                    onChange={getDadosForm}
                    value={obj.potencia}
                />
            </div>

            <div className="col-md-4">
                <label htmlFor="transmissao" className="form-label">Transmissao:</label>
                <input 
                    type="text" 
                    id="transmissao" 
                    name="transmissao" 
                    className="form-control"
                    onChange={getDadosForm}
                    value={obj.transmissao}
                />
            </div>
            
            {
                botao
                ?
                    <input type="button" defaultValue='Cadastrar' onClick={cadastrar} className="btn btn-primary col-md-2"/>
                :
                    <div className="d-flex gap-3">
                        <input type="button" defaultValue='Alterar' className="btn btn-warning col-md-3"/>
                        <input type="button" defaultValue='Remover' className="btn btn-danger col-md-3"/>
                        <input type="button" onClick={cancelar} defaultValue='Cancelar' className="btn btn-secondary col-md-3"/>
                    </div>                    

                }
            
            
        </form>
    );
};

export default Formulario;