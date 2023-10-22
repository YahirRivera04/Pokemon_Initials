import React from "react";
import { useEffect, useState } from 'react';
import "./Oak.css"

export default function Oak(){

    const [useDataAll, setDataAll] = useState([]);
    
    useEffect(() => {
        async function dataFecth(){
            const datos = await(await fetch("/api/all")).json();
            setDataAll(datos);
        }
        dataFecth();
    }, [])

    const [data, setData] = React.useState(null);
    React.useEffect(() => {
        fetch("/api/message")
        .then((res) => res.json())
        .then((data) => setData(data.message))
    }, []);

    const [data2, setData2] = React.useState(null);
    React.useEffect(() => {
        fetch("/api/message2")
        .then((res) => res.json())
        .then((data2) => setData2(data2.message))
    }, []);

    const [data3, setData3] = React.useState(null);
    React.useEffect(() => {
        fetch("/api/message3")
        .then((res) => res.json())
        .then((data3) => setData3(data3.message))
    }, []);

    const [data4, setData4] = React.useState(null);
    React.useEffect(() => {
        fetch("/api/message4")
        .then((res) => res.json())
        .then((data4) => setData4(data4.message))
    }, []);
    

    return(
        <>
        <div className="home">
            <img src={require('./images/Profesor_Oak.png')} alt=""/>
            <div className="TextoOak">
                <h1>Profesor Oak dice: </h1>
                <p>{data}</p>
                <p>{data2}</p>
                <p>{data3}</p>
                <p>{data4}</p>
            </div>
                <img src={require('./images/logo.png')} alt="" style={{ width: 500, height: 200, padding: 50}} />
        </div>
        <div className="imagenesPokemons">
                {useDataAll.map(datos =>{
                    return(
                        <>
                            <div>
                                <img src={datos.imagen} alt={datos.name} />
                            </div>   
                        </>
                    )
                })}
            </div>
        </>
    )
}