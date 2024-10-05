// import Image from "next/image";
// import localFont from "next/font/local";
import Topo from '@/components/Topo'

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
