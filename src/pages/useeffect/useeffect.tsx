import { useState, useEffect } from "react";
import Topo from "@/components/Topo";

export default function useeffect() {

    const [cont,setCont]=useState<number>(0)
    const [aux,setAux]=useState<number>(0)

    useEffect(()=>{
        alert('UseEffect disparado')
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
            </div>
        </>
    )
}