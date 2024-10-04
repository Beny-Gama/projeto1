interface CardProps {
    produto:string,
    valor:number,
    desconto:number,
    funcao:any
}

export default function Card(props:CardProps){
    return(
        <div className={`flex justify-center flex-col ${props.desconto>0?' text-red-700':'text-black-900'} rounded-sm p-3`}>
            <div>{props.produto}</div>
            <div className={'line-through'}>R$:{props.valor}</div>
            {   props.desconto>0&&(
                <div>
                    <div>R$:{props.desconto}</div>
                    <div>R$:{props.funcao(props.valor,props.desconto)}</div>
                </div>
            )}
        </div>
    )
}