import { useState } from 'react'
import logo from './assets/frases.png'
import './App.css'

function App() {
  const [ textoFrase, setTextoFrase ] = useState("")
  const [ categoriaSelecionada, setCategoriaSelecionada ] = useState(0)
  const todasFrases = [
    {
      id: 1,
      nome: "Motivacional",
      frases: [ 'Devíamos ser ensinados a não esperar por inspiração para começar algo. Ação sempre gera inspiração. Inspiração raramente gera ação.',
                'Descubra quem é você, e seja essa pessoa. A sua alma foi colocada nesse mundo para ser isso, então viva essa verdade e todo resto virá.',
                'Não é a carga que o derruba, mas a maneira como você a carrega.',
                'Não existe nada de completamente errado no mundo, mesmo um relógio parado, consegue estar certo duas vezes por dia.',
        
       
      ]
    },
    {
      id: 2,
      nome: "Bom dia",
      frases: [ 'Bom dia! Ouse sonhar! Você é muito mais capaz do que a sua mente te diz.',
                'Bom dia! Ouse sonhar! Você é muito mais capaz do que a sua mente te diz.',
                'Que o seu dia seja marcado por novas conquistas e objetivos concluídos! Uma excelente manhã para todos!',
                'Foco, força e coragem para que hoje seja um dia marcado por metas concluídas. Bom dia!',
        
      ]
    },
    {
      id: 3,
      nome: "Boa noite",
      frases: [ 'Nunca desista daquilo que você pede a Deus todas as noites. Que as suas orações em breve sejam correspondidas! Boa noite de tranquilidade para você.',
                'Que sua noite seja tranquila e seu sono seja suave, para que o seu dia seja abençoado como deve ser. Boa noite! Descanse na certeza de que Deus cuida de tudo.',
                'Respire. Tome uma dose de paz. Escute o bater manso do coração. Silencie a mente. Relaxe o corpo. Descanse. Amanhã tem mais... Boa noite!',
                'Esse é um bom momento, uma boa oportunidade para descansar, perdoar, esquecer, sonhar e se preparar para os desafios do dia seguinte. Tenha uma boa noite!',

        
      ]
    }
  ]

  function categoriaEscolhida (index: number) {
    setCategoriaSelecionada (index);
  }

  function gerarFrase (){
  let numeroAleatorio = Math.floor(Math.random() * todasFrases [categoriaSelecionada].frases.length)
  setTextoFrase(`"${todasFrases[categoriaSelecionada].frases[numeroAleatorio]}"`)
  }

  return (
    <>
      <div className="container">
        <img
          alt="Logo frases"
          src={logo}
          className="logo"
        />
        <h2 className="titulo" >Categorias</h2>
        <section className="area-categoria" >
          { todasFrases.map( (item,index) => (
            <button  key={item.id} className="botao-categoria" 
            style={{borderWidth: item.nome === todasFrases[categoriaSelecionada].nome? 2: 0, borderColor: 'blue'}} 
            onClick={() => categoriaEscolhida(index)}
            >{item.nome}</button>
          )) }
        </section>
        <button className="botao-frase" onClick = {gerarFrase}>gerarFrase</button>
        { textoFrase !== '' && <p className="texto-frase" >{ textoFrase }</p> }
      </div>
    </>
  )
}

export default App