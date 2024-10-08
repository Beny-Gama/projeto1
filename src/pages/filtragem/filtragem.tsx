import { useEffect, useState } from "react";
import Topo from "../../components/Topo";

// Define a Car interface for better type safety
interface Car {
    id: number;
    categ: string;
    valor: number;
    modelo: string;
}
let listaPronta:boolean = false

export default function Filtragem() {
    const [categ, setCateg] = useState<string>('');
    const [linhas, setLinhas] = useState<JSX.Element[]>([]);
    const [carros, setCarros] = useState<Car[]>([]);

    useEffect(() => {
        fetch('http://127.0.0.1:1880/carros')
            .then(res => res.json())
            .then(res => {
                setCarros(res);
                listaPronta = true;
            });
    }, []);

    function criarLinhas(cat: string) {
        if (listaPronta) {
            setCateg(cat);
            const l: JSX.Element[] = [];  // Use const instead of let

            carros.forEach((c) => {
                if (c.categ === cat) {
                    l.push(
                        <div className="flex flex-row w-[500px]" key={c.id}>
                            <div className="w-full">{c.categ}</div>
                            <div className="w-full">{c.valor}</div>
                            <div className="w-full">{c.modelo}</div>
                        </div>
                    );
                }
            });
            setLinhas(l);
        } else {alert('Lista de carros ainda não está pronta!')}
    }

    return (
        <>
            <Topo />
            <label>Selecione a categoria</label>
            <select value={categ} onChange={(evt) => criarLinhas(evt.target.value)}>
                <option value=''>Nenhum</option>
                <option value='Esporte'>Esporte</option>
                <option value='SUV'>SUV</option>
                <option value='Utilitario'>Utilitário</option>
            </select>

            <div className="flex flex-col">
                <div className="flex flex-row w-[500px]">
                    <div className="w-full">Categoria</div>
                    <div className="w-full">Valor</div>
                    <div className="w-full">Modelo</div>
                </div>
                {linhas}
            </div>
        </>
    );
}
