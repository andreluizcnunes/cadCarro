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

  //Cadastrar Carro
  const cadastrar = () =>{
    fetch('http://localhost:8080/cadastrar',{
      method: 'post',
      body:JSON.stringify(objCarro),
      headers:{
        'Content-type':'application/json',
        'Accept':'application/json'
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {
      
      if(retorno_convertido.mensagem !== undefined){
        alert(retorno_convertido.mensagem);
      }else{
        setCarros([...carros, retorno_convertido]);
        alert("Carro cadastrado com Sucesso!");
        limparFormulario();
      }

    })
  }

  //Limpar formulario
  const limparFormulario = () =>{
    setObjCarro(carro);
  }

  //Retorno
  return (
    <div className='container'>
      <Formulario 
        botao={btnCadastrar}
        getDadosForm={getInputForm}
        cadastrar={cadastrar}
        obj={objCarro}
      />
      <Tabela
        vetor={carros}
      />
    </div>
  )
}

export default App