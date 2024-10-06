import { useState } from "react"
import DisplayState from "@/components/DisplayState"

export default function usestate() {
    const [cont,setCont]=useState<number>(0)

    function adicionar() {
        let c=cont
        c++
        setCont(c)
    }
    function subtrair() {
        let c=cont
        c--
        setCont(c)
    }

    return(
        <div>
            UseState
            <DisplayState valor={cont} adicionar={adicionar} subtrair={subtrair}></DisplayState>
        </div>
    )
}