import React from "react";

const Tabela = ({ vetor }) =>{
    return(
        <table className="table mt-4">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Modelo</th>
                    <th>Fabricante</th>
                    <th>Ano</th>
                    <th>Combustivel</th>
                    <th>Motor</th>
                    <th>Potencia</th>
                    <th>Transmissao</th>
                    <th>Ação</th>
                </tr>
            </thead>

            <tbody>
                {
                    vetor.map((obj, indice) =>(
                        <tr key={indice}>
                            <td>{indice+1}</td>
                            <td>{obj.modelo}</td>
                            <td>{obj.fabricante}</td>
                            <td>{obj.ano}</td>
                            <td>{obj.tipoCombustivel}</td>
                            <td>{obj.motor}</td>
                            <td>{obj.potencia}</td>
                            <td>{obj.transmissao}</td>
                            <td>
                                <button className="btn btn-success">Selecionar</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
};

export default Tabela;