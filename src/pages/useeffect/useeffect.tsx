import { useState, useEffect } from "react";
import Topo from "@/components/Topo";
import Globais from "@/components/Globais";

export default function useeffect() {

    const [cont,setCont]=useState<number>(0)
    const [aux,setAux]=useState<number>(0)

    useEffect(()=>{
        alert('UseEffect disparado')
        Globais.canal='CFBdrone'
        Globais.curso='c++'
        Globais.ano='2099'
    },[aux])

    function add(){
        let a=aux
        a++
        setAux(a)
    }

    return(
        <>
            <Topo/>
            <div>
                <p className="w-40 mx-auto p-5 rounded-md bg-zinc-300">{`valor de cont: ${cont}`}</p>
                <p className="w-40 mx-auto p-5 rounded-md bg-zinc-300">{`valor de aux: ${aux}`}</p>
                <button className="btnPadrao mx-auto" onClick={add}>+1</button>
            <div>
                <p>{Globais.canal}</p>
                <p>{Globais.curso}</p>
                <p>{Globais.ano}</p>
            </div>
            </div>
        </>
    )
}