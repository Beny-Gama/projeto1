import { useState } from "react"

export default function inputs() {
    const [nome,setNome]=useState("")
    const [curso,setCurso]=useState("")

    return (
        <div>
            <div className="campoForm">
                <label htmlFor="">Nome</label>
                <input type="text" value={nome} onChange={(evt)=>{setNome(evt.target.value)}}/>
            </div>
            <div className="campoForm">
                <label htmlFor="">curso</label>
                <input type="text" value={curso} onChange={(evt)=>{setCurso(evt.target.value)}}/>
            </div>
            <div>Nome digitado: {nome}</div>
            <div>Curos digitado: {curso}</div>
        </div>
    )
}