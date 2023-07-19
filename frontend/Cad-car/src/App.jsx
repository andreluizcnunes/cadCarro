import { useEffect, useState } from 'react'
import Formulario from './components/Formulario'
import Tabela from './components/Tabela'

function App() {

  const carro = {
    id : 0,
    fabricante: '',
    modelo: '',
    ano: 0,
    tipoCombustivel: '',
    motor: '',
    potencia: '',
    transmissao: ''
  }
  
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [carros, setCarros] = useState([]);
  const [objCarro, setObjCarro] = useState(carro);

  useEffect(() => {
    fetch("http://localhost:8080/listar")
    .then(retorno => retorno.json())
    .then(retornoConvertido => setCarros(retornoConvertido));
  }, []);

  const getInputForm = (e) =>{
    setObjCarro({...objCarro, [e.target.name]:e.target.value});
  }

  return (
    <div className='container'>
      <p>{JSON.stringify(objCarro)}</p>
      <Formulario 
        botao={btnCadastrar}
        getDadosForm={getInputForm}
      />
      <Tabela
        vetor={carros}
      />
    </div>
  )
}

export default App