import { useEffect, useState } from 'react';
import './style.css';

export default function Johto(){
    
    const [useDataJohto, setDataJohto] = useState([]);
    
    useEffect(() => {
        async function dataFecth(){
            const data = await(await fetch("/api/johto")).json();
            setDataJohto(data);
        }
        dataFecth();
    }, [])


    return (
        <div className='pokedex'>
        <h1>Johto</h1>
        <div className='pokemons'>
            {useDataJohto.map( data =>{
                return(
                    <>
                        <section className='useDataCont'>
                            <div>
                                <img src={data.imagen} alt="Pokemon"/>                              
                            </div>
                            <div>
                                <p>Nombre: {data.nombre}</p>
                            </div>
                            <div>
                                <p> Numero en Pokedex: {data.numeroPokedex}  </p>
                            </div>
                            <div>
                                <p> Tipo: {data.tipo} </p>
                            </div>
                            <div>
                                <p> Debilidad: {data.debilidad}</p>
                            </div>
                        </section>
                    </>
                )
            })}
        </div>
    </div>
    )

}