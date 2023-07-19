import { useState } from 'react'
import Formulario from './components/Formulario'
import Tabela from './components/Tabela'

function App() {

  const [btnCadastrar, setBtnCadastrar] = useState(true);

  return (
    <div className='container'>
      <Formulario 
        botao={btnCadastrar}
      />
      <Tabela/>
    </div>
  )
}

export default App