import { useEffect, useState } from 'react'
import './App.css'
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

  //Cadastrar Carro
  const remover = () =>{
    fetch('http://localhost:8080/deletar/'+objCarro.id,{
      method: 'delete',
      headers:{
        'Content-type':'application/json',
        'Accept':'application/json'
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {
      
      // mensagem de sucesso
      alert("Removido com sucesso!");

      // vetor temporaro, copiando o vetor original

      let vetorTemp = [...carros];

      // buscando o indece
      let indice = vetorTemp.findIndex((e) => {
        return e.id === objCarro.id;
      });

      // remove o produto do vetor
      vetorTemp.slice(indice, 1);

      // atualizando o vetor
      setCarros(vetorTemp);

      // limpando o formulario
      limparFormulario();
      window.location.reload();
    })
  }

  //Limpar formulario
  const limparFormulario = () =>{
    setObjCarro(carro);
    setBtnCadastrar(true);
  }

  const selecionarCarro = (indice) =>{
    setObjCarro(carros[indice]);
    setBtnCadastrar(false);
    window.scrollTo(0, 0);
  }

  //Retorno
  return (
    <div className='container'>
      <Formulario 
        botao={btnCadastrar}
        getDadosForm={getInputForm}
        cadastrar={cadastrar}
        obj={objCarro}
        cancelar={limparFormulario}
        remover={remover}
      />
      <Tabela
        vetor={carros}
        selecionar={selecionarCarro}
      />
    </div>
  )
}

export default App