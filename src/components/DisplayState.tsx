interface DisplayStateProps{
    valor:number
    fvalor:any
}

export default function DisplayState(props:DisplayStateProps) {
    function adicionar(tipo:number) {
        let c=props.valor
        c+=tipo
        props.fvalor(c)
    }

    return(
        <div className="flex flex-col items-center p-5 rounded-md bg-zinc-300 w-60 mx-auto">
            <div className="flex bg-zinc-600 px-5 py-3 border-solid border-2 border-zinc-900 text-white rounded mb-6 shadow-2xl">
            {props.valor}
            </div>   
            <div className="flex gap-5">    
                <button className="btnPadrao shadow-2xl" onClick={()=>{adicionar(+1)}}>&#x2b;1</button> 
                <button className="btnPadrao shadow-2xl" onClick={()=>{adicionar(-1)}}>&#x2212;1</button>
            </div>
        </div>
    )
}