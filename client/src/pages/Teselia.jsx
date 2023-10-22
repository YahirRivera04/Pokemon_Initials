import { useEffect, useState } from 'react';
import './style.css';

export default function Teselia(){
    
    const [useDataTeselia, setDataTeselia] = useState([]);
    
    useEffect(() => {
        async function dataFecth(){
            const data = await(await fetch("/api/teselia")).json();
            setDataTeselia(data);
        }
        dataFecth();
    }, [])


    return (
    <div className='pokedex'>
        <h1>Teselia</h1>
        <div className='pokemons'>
            {useDataTeselia.map( data =>{
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