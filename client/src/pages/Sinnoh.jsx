import { useEffect, useState } from 'react';
import './style.css';

export default function Sinnoh(){
    
    const [useDataSinnoh, setDataSinnoh] = useState([]);
    
    useEffect(() => {
        async function dataFecth(){
            const data = await(await fetch("/api/sinnoh")).json();
            setDataSinnoh(data);
        }
        dataFecth();
    }, [])


    return (
    <div className='pokedex'>
        <h1>Sinnoh</h1>
        <div className='pokemons'>
            {useDataSinnoh.map( data =>{
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