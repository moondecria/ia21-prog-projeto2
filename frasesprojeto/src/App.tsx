import { useState } from 'react'
import logo from './assets/bomdia.jpg'
import './App.css'


function App() {

  const [ textoFrase, setTextoFrase] = useState("")
  const [cateagoriaSelecionada]

  const todasFrases = [
    {id:1,
    nome:"Motivacional",
    frases:['Uma ótima manhã para todos! Leve a vida leve e brilhante como um campo de girassóis. 🌻🌻🌻',

    'Você cria a sua própria vida, um dia de cada vez! Tenha um dia iluminado e cheio de motivação! 💛',
    
    'As pessoas felizes são aquelas que sabem enxergar o lado bom em todas as coisas. Bom dia, povo! 😋',
    
    'Bom dia! Que o sol desta manhã nos relembre que tudo o que precisamos está dentro de nós!',

]
},


(id:2,
  nome: "bom dia",
  frases: ['Uma ótima manhã para todos! Leve a vida leve e brilhante como um campo de girassóis. 🌻🌻🌻',

  'Você cria a sua própria vida, um dia de cada vez! Tenha um dia iluminado e cheio de motivação! 💛',
  
  'As pessoas felizes são aquelas que sabem enxergar o lado bom em todas as coisas. Bom dia, povo! 😋',
  
  'Bom dia! Que o sol desta manhã nos relembre que tudo o que precisamos está dentro de nós!',
  ])
},

(id:2,
  nome:""
  
  return (
    
      <div className='container'>
       <img 
       alt="logo frases"
       src={logo}
       />

       <h2>categorias</h2>
       <section className='area-categoria'>
       {todasFrases.map( (item, index)=>(
       <button className='botao-categoria' key={Item.id}>
       <button className='botao categoria' key={item.id}>
       <button className='botao categoria'>Boa noite</button>
       </section>
       <button className='botao-frases'>Gerar frases</button>

       {textoFrase !== '' &&<p className='texto-frase'>{textoFrase}</p>}
       
      
      
      </div>
     
    
  )
}

export default App
