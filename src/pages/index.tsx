// import Image from "next/image";
// import localFont from "next/font/local";
import Topo from '@/components/Topo'
import Card from '@/components/Card';

function caldDesc(v:number, d:number){
 return v-d
}

function caldDesc2(v:number, d:number){
  return v-(d/2)
 }

const produtos=[
  {
    produto:'mause',
    valor:49.9,
    desconto:0,
    disponivel:true
  },
  {
    produto:'teclado',
    valor:69.90,
    desconto:0,
    disponivel:true
  },
  {
    produto:'monitor',
    valor:449.90,
    desconto:0,
    disponivel:true
  },
  {
    produto:'CPU',
    valor:799.99,
    desconto:50,
    disponivel:true
  },
  {
    produto:'Cx.som',
    valor:799.99,
    desconto:50,
    disponivel:true
  },
]
export default function Home() {
  return (
    <div>
      <Topo/>
      <div style={testecss}>Typescripet</div>
      <div 
      style={{color:'black',
      backgroundColor:'#bbb'}}>
        React
      </div>
      <div className='flex justify-center gap-3' >
          {
            produtos.map((element:any)=>{
              if(element.disponivel){
                return(
                  <Card produto={element.produto} valor={element.valor} desconto={element.desconto} funcao={caldDesc}/>
                )
              }
            })
          }
      </div>
    </div>
  );
}


const testecss={
  display:'flex',
  justifayContent:'center',
  alignItens:'center',
  color:'#00f',
  backgraundColor:'#eee',
  fontSize:'20px',
}
