import Link from "next/link"
const nome='bruno berardo'
let canal='bgama18'

function caldDesc(v:number,d:number){
  return v-d
}

export default function Topo(){
  return (
    <div className='flex flex-col justify-between items-center bg-zinc-300 h-[170px]'>
      <div>logo</div>
      <div className="flex flex-col justify-center items-center">
        <div className="text-3xl">{canal}</div>
        <div className="subtituloTopo">Curso de React</div>
      </div>
      <nav>
        <Link href={'/'}>
          Home
        </Link>
        <Link href={{
          pathname:'/produtos/produtos',
          query:{
            nome:'bruno',
            curso: 'react next.js'
          }
        }}>
          Produtos
        </Link>
        <Link href={'/teste/teste'}>
          Teste  
        </Link>
      </nav>
    </div>

  )
}