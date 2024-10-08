import Card from "@/components/Card";
import Topo from "@/components/Topo";
import { useRouter } from "next/router";

function caldDesc(v: number, d: number) {
  return v - d;
}

// function caldDesc2(v: number, d: number) {
//   return v - d / 2;
// }

const produtos = [
  {
    id: 0,
    produto: 'mouse',
    valor: 49.9,
    desconto: 0,
    disponivel: true,
  },
  {
    id: 1,
    produto: 'teclado',
    valor: 69.90,
    desconto: 0,
    disponivel: true,
  },
  {
    id: 2,
    produto: 'monitor',
    valor: 449.90,
    desconto: 0,
    disponivel: true,
  },
  {
    id: 3,
    produto: 'CPU',
    valor: 799.99,
    desconto: 50,
    disponivel: true,
  },
  {
    id: 4,
    produto: 'Cx.som',
    valor: 799.99,
    desconto: 50,
    disponivel: true,
  },
];

export default function ProdutosPagina() {

  const router=useRouter()
  const {nome,curso}=router.query
  console.log(nome)
  console.log(curso)

  return (
      <div>
        <Topo/>
      <div className='flex justify-center gap-3' >
            {
              produtos.map((e)=>{
                if(e.disponivel){
                  return(
                    <Card key={e.id} produto={e.produto} valor={e.valor} desconto={e.desconto} funcao={caldDesc}>tete 2</Card>
                  )}})}
        </div>
    </div>
  )
}