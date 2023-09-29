import { useState, useCallback } from 'react'
import reactLogo from './assets/o-o.com.png'
import './App.css'

function App() {
  const [inputAno, setInputAno] = useState("");
  

  const calcular = useCallback ( () => {
    if (!inputAno) {
      alert("Preencha os campos corretamentes!")
      return
    }
    console.log(".......")
  }, [ inputAno ])

  return (
    <>
        <div className="pricipal">
          <div>
            <img src={reactLogo} className="logo react" alt="React logo" />
          </div>
          <h1>Descubra a sua Idade</h1>
          <hr/>
          <label>Digite seu nome:</label>
          <input placeholder="digite aqui seu nome" type="text" required />

          <label>Digite o ano em que você nasceu:</label>
          <input value={ inputAno } className="ano-nascimento" placeholder="digite aqui seu ano de nascimento" type="number" required />

          <button className='bt-calcular' onClick={ calcular } >Calcular Idade</button>
          <p className="rodape-idade">A idade apare aqui!</p>
        </div>
    </>
  )
}

export default App