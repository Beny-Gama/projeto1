import { useEffect, useState } from "react";
import Topo from "../../components/Topo";

let carros:any = '' 
let listaPronta = false

export default function filtragem() {
    const [categ, setCateg] = useState('')
    const [linhas, setLinhas] = useState<any[]>([])

    useEffect(()=>{
        fetch('http://127.0.0.1:8080/carros')
        .then(res => res.json())
        .then(res => {
            carros=res
            listaPronta = true
        })
    },[])

    function criarLinhas(cat:any){
        if(listaPronta){
            setCateg(cat)
            let l:any[]=[]
            carros.forEach((c:any)=>{
            if(c.categ == cat){
                l.push(
                    <div className="flex flex-row w-[500px]" key={c.id}>
                    <div className="w-full">{c.categ}</div>
                    <div className="w-full">{c.valor}</div>
                    <div className="w-full">{c.modelo}</div>
                </div>
                )
            }
        })
        setLinhas(l)
        } else {alert('lista de carros ainda não está pronta!')}
    }

    return(
        <>
            <Topo/>
            <label>Selecione a categoria</label>
            <select value={categ} onChange={(evt)=>criarLinhas(evt.target.value)}>
                <option value=''>Nenhum</option>
                <option value='Esporte' >Esporte</option>
                <option value='SUV'>SUV</option>
                <option value='Utilitario'>Utilitario</option>
            </select>

            
            <div className="flex flex-col" >
                <div className="flex flex-row w-[500px]">
                    <div className="w-full">Categria</div>
                    <div className="w-full">Valor</div>
                    <div className="w-full">Modelo</div>
                </div>
            {linhas} 
            </div>
        </>
    )   
}

