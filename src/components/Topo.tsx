import Card from "./Card"

const nome='bruno berardo'
let canal='bgama18'

function caldDesc(v:number,d:number){
  return v-d
}


export default function Topo(){
  return (
    <div className='flex justify-between items-center bg-zinc-300 h-[100px]'>
      <div>logo</div>
      <div className="flex flex-col justify-center items-center">
        <div className="text-3xl">{canal}</div>
        <div className="subtituloTopo">Curso de React</div>
      </div>
      <div>{nome}</div>
    </div>

  )
}