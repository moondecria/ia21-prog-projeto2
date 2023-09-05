import { useState, useEffect } from 'react'

//Função principal
export default function App(){

  const [input, setInput] = useState("");
  const [tarefas, setTarefas] = useState<string[]>([])

  const [editarTarefa, setEditarTarefa] = useState({
    enabled: false,
    tarefa:''
  })
  const [teste, useTeste] = useState(false);


  useEffect(() =>{
      const tarefaSalva = localStorage.getItem("@cursoreact")
      console.log(tarefaSalva)
  }, [])

  

    function registrar(){
      if(!input){
        alert("Preencha o nome da sua tarefa")
        return;
      }
      
      if(editarTarefa.enabled){
        editarTarefaSalva();
        return;
      }

      setTarefas(tarefas => [...tarefas, input])
      setInput("")
    }

    function editarTarefaSalva(){
      const findIndexTarefa = tarefas.findIndex(tarefas => tarefas === editarTarefa.tarefa)
      const todasTarefas = [...tarefas];

      todasTarefas[findIndexTarefa]=input;
      setTarefas(todasTarefas);
      setEditarTarefa({
        enabled: false,
        tarefa: ''
      })
      setInput("")
      localStorage.setItem("@cursoreact" ,JSON.stringify([...tarefas,input]))

    }

    function excluir(item: string){
      const excluirTarefa = tarefas.filter(tarefas => tarefas !== item)
      setTarefas(excluirTarefa)
      localStorage.setItem("@cursoreact", JSON.stringify(excluirTarefa))
    }
    function editar(item: string){
      setInput(item)
      setEditarTarefa({
        enabled:true,
        tarefa: item
      })
    }
    setInput("")

    localStorage.setItem("@cursoreact", JSON.stringify(todaTarefa))
  
   return (
      <div>
        <button onClick={() => setTeste(true)}>clicar</button>
        <h1>Lista de tarefas🌛</h1>

        <input
          placeholder="escreva sua tarefa..☽"
          value={input}
          onChange={ (e) => setInput(e.target.value)}
        />
        <button onClick={registrar}> {editarTarefa.enabled ? "atualizar tarefa" : "Adicionar tarefa"}</button>
        <hr/>
        
        {tarefas.map( (item, index) =>(
          <section key={item}>
            <span>{item}</span>
            <button onClick={ () => excluir(item) }>Exclua a sua tarefa</button>
            <button onClick={ () => editar(item)}>Edite sua tarefa</button>
          </section>

        ))}
      </div>
  )
}