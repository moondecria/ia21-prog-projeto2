import { useState } from 'react'
//import './App.css'

export default function App(){
  const[tarefas,setTarefas] = useState("");
  const[tarefas,setTarefas] = useState([

    'estudar',
    'lavar louça',
    'descansar'
  ])

   function registrar(){
    if(!input){
    alert("preencha o nome da sua tarefa")
    return;
    }  
      setTarefas(tarefas => [...tarefas,input])
   }

 

  return (
 
    <div>
      <h1> lista de tarefas</h1>
      
      <input
      placeholder="digite uma tarefa..."
      value={input}
      onChange={ (e) => setInput(e.target.value)}
      />
      <button onClick={registrar}>adicionar tarefa</button>
      <hr/>                                                                                                                                                                                                                                                                                                                                                                   

      {tarefas.map( (item,index) =>(
        <section> key={item} >
        <span>{item}</span>
        </section>
      
      ))}
      </div>

  )
}
   