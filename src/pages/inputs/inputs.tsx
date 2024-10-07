import { useState } from "react"
import Topo from "@/components/Topo"

const cursos=['Html','CSS','React','Javascript','Artuino','C++']


const jsonCurso=[
    {curso: 'Html'},
    {curso: 'CSS'},
    {curso:'React'},
    {curso: 'Javascript'},
    {curso: 'Artuino'},
    {curso: 'C++'}
]

export default function inputs() {
    const [nome,setNome]=useState("")
    const [curso,setCurso]=useState("")
    
    function fcurso() {
        return cursos.map((c:string)=>{
            return <option value={c}>{`Curso de ${c}`}</option>
        })
    }
    const ccursos = jsonCurso.map((c:any)=>{
        return <option value={c.curso}>{`Curso de ${c.curso}`}</option>
    })

    return (
        <div>
            <Topo/>
            <div className="campoForm">
                <label htmlFor="">Nome</label>
                <input type="text" value={nome} onChange={(evt)=>{setNome(evt.target.value)}}/>
            </div>
            <div className="campoForm">
                <label htmlFor="">Curso</label>
                <select value={curso} onChange={(evt)=>{setCurso(evt.target.value)}}>
                    {
                        ccursos
                    }
                </select>
            </div>
            <div>Nome digitado: {nome}</div>
            <div>Curos digitado: {curso}</div>
        </div>
    )
}