import Link from "next/link"

const canal='bgama18'

export default function Topo(){
  return (
    <div className='flex flex-col justify-between items-center bg-zinc-300 h-[170px]'>
      <div>logo</div>
      <div className="flex flex-col justify-center items-center">
        <div className="text-3xl">{canal}</div>
        <div className="subtituloTopo">Curso de React</div>
      </div>
      <nav className="flex gap-5">
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
        <Link href={'/teste/Teste'}>
          Teste  
        </Link>
        <Link href={'/usestate/Usestate'}>
           State
        </Link>
        <Link href={'/inputs/Inputs'}>
           inputs
        </Link>
        <Link href={'/useeffect/Useeffect'}>
           useeffect
        </Link>
        <Link href={'/filtragem/Filtragem'}>
           filtragem
        </Link>
      </nav>
    </div>
  )
}