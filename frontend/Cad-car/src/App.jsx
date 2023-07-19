import { useEffect, useState } from 'react'
import Formulario from './components/Formulario'
import Tabela from './components/Tabela'

function App() {
  
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [carros, setCarros] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/listar")
    .then(retorno => retorno.json())
    .then(retornoConvertido => setCarros(retornoConvertido));
  }, []);

  return (
    <div className='container'>
      <Formulario 
        botao={btnCadastrar}
      />
      <Tabela
        vetor={carros}
      />
    </div>
  )
}

export default App