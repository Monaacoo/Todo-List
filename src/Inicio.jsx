import React,{ useState } from "react"
import Titulo from "./components/Titulo"
import Campo from "./components/Campo"
import Conteudo from "./components/Conteudo"
import Entrada from "./components/Entrada"


export default function Inicio() {

const [tarefas, definirTarefas] = useState([])

function AdicionarTarefa(evento){
    const novaTarefa =  evento.target.tarefa.value
    definirTarefas([...tarefas, novaTarefa])
    evento.preventDefault()
    evento.target.tarefa.value = ""
}

    return<>
        <Titulo/>
        <Campo>
            <form onSubmit={AdicionarTarefa}>
                <Entrada type="text" name="tarefa" placeholder="Type your task" />
            </form>
        </Campo>
        <Campo>
            {
                tarefas.map(function(texto){
                    return <Conteudo tarefa={texto}/>
                })
            }
        </Campo>
    </>
}