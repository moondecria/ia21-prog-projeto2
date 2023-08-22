import { useState } from 'react'
import reactLogo from './assets/react.svg'
import logo from './assets/calculator123.png'
import './App.css'



interface resultadoP {
  titulo:string;
  gasolina: string | number;
  alcool:string | number;
}

function app() {
  const [gasolinaInput, setGasolinaInput] = useState(0)
  const [alcoolInput, setAlcoolInput] = useState(0)
  const [resultado, setResultado] = useState <resultadoP>()


  function calculo(event: FormEvent){
    event.preventDefault();
    let conta = (alcoolInput/gasolinaInput)
    console.log(conta)
    if(conta <= 0.7){
    setResultado({
    titulo:"compensa usar Alcool",
    gasolina: formataMoeda(gasolinaInput),
    alcool: formataMoeda(alcoolInput)
    
    })
  }else{
    setResultado({
      titulo:"compensa usar Gasolina",
      gasolina: formataMoeda(gasolinaInput),
      alcool:formataMoeda(alcoolInput)
    })
  }
}

function formataMoeda(valor:number){
  let valorFormatado = valor.toLocaleString("pt-br",
  {
    style:"currency"
    currency:"BRL"

  })
  return valorFormatado;
  }
}

return {
  <div>
   <main className='container'>
   <img className='logo' src={logo}
   alt='logo calculadora melhor custo beneficio combustivel'
   />
   <h1 className='titulo'>Qual a melhor opção?</h1>
   <form className="form" onSubmit={calculo}>
   <label>Alcool (preço por litro):</label>
   <input className="input"
   type="number"
   placeholder="4.90"
   min='1'
   step="0.01"
   required
   value={alcoolInput}
   onChange={ (e) => setAlcoolInput(Number(e.target.value))}
   />

   <label>Gasolina (preço por litro):</label>
   <input className="input"
   type="number"
   placeholder="4.90"
   min='1'
   step="0.01"
   required
   value={GasolinaInput}
   onChange={ (e) => setGasolinaInput(Number(e.target.value))}
   />

   <input className="button" type="submit" value="calcular"/>

   </form>

   {resultado && object.keys(resultado).length > 0 &&(
    <section className="resultado">
    <h2 className="titulo-resultado"> {resultado.titulo}</h2>
   )
  
 







