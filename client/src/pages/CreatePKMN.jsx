import React, { useState } from 'react';
import "./CreatePKMN.css"

export default function CreatePokemon() {


  const [name, setName] = useState('');
  const [region, setRegion] = useState('');
  const [pokedexnumber, setNumber] = useState('');
  const [type, setType] = useState('');
  const [weakness, setWeakness] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const [newname, setnewName] = useState('');
  const [newregion, setnewRegion] = useState('');
  const [newpokedexnumber, setnewNumber] = useState('');
  const [newtype, setnewType] = useState('');
  const [newweakness, setnewWeakness] = useState('');
  const [newimageUrl, setnewImageUrl] = useState('');

  const [delname, setdelName] = useState('');
  const [delregion, setdelRegion] = useState('');
  const [delpokedexnumber, setdelNumber] = useState('');
  const [deltype, setdelType] = useState('');
  const [delweakness, setdelWeakness] = useState('');
  const [delimageUrl, setdelImageUrl] = useState('');

  const [createdPokemon, setCreatedPokemon] = useState(null);
  const [setnewCreatedPokemon] = useState(null);
  const [setDelPokemon] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('/api/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, region, pokedexnumber, type, weakness, imageUrl })
    });
    const newPokemon = await response.json();
    setCreatedPokemon(newPokemon);
    setName('');
    setRegion('');
    setNumber('');
    setType('');
    setWeakness('');
    setImageUrl('');
  }

  const handleUpdate = async(event) => {
    event.preventDefault();
    const response = await fetch('/api/updatepokemon',{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({newname, newregion, newpokedexnumber, newtype, newweakness, newimageUrl})
    });
    const updatereq = await response.json();
    setnewCreatedPokemon(updatereq);
    setnewName('');
    setnewRegion('');
    setnewNumber('');
    setnewType('');
    setnewWeakness('');
    setnewImageUrl('');
  }

  const handleDelete = async(event) => {
    event.preventDefault();
    const response = await fetch('/api/deletepokemon',{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({delname, delregion, delpokedexnumber, deltype, delweakness, delimageUrl})
    });
    const deletereq = await response.json();
    setDelPokemon(deletereq);
    setdelName('');
    setdelRegion('');
    setdelNumber('');
    setdelType('');
    setdelWeakness('');
    setdelImageUrl('');
  }

  return (
    <>
    <div className='create'>
        <div className='form'>
          <form onSubmit={handleSubmit}>
          <h1>Crealo en la Base de Datos</h1>
          <p>Crea tu Pokemon</p>
              <label style={{paddingRight: 45}}>Nombre:</label> 
              <input type="text" value={name} onChange={event => setName(event.target.value)} /><br/>

              <label style={{paddingRight:40}}>Region:</label> 
              <input type="text" value={region} onChange={event => setRegion(event.target.value)}/><br/>

              <label style={{paddingRight:30}}>Numero de la Pokedex:</label> 
              <input type="text" value={pokedexnumber} onChange={event => setNumber(event.target.value)} /><br/>

              <label style={{paddingRight:60}}>Tipo:</label> 
              <input type="text" value={type} onChange={event => setType(event.target.value)} /><br />

              <label style={{paddingRight:10}}>Debilidad:</label> 
              <input type="text" value={weakness} onChange={event => setWeakness(event.target.value)} /><br />

              <label style={{paddingRight:30}}>Imagen Url:</label> 
              <input type="text" value={imageUrl} onChange={event => setImageUrl(event.target.value)} /><br />

              <button type="submit">Crear Pokemon</button>
          </form>
        
        {createdPokemon &&(
          <div className='newpokemon'>
            <ul>
              Nombre: {createdPokemon.name}<br />
            </ul>
            <ul>
              Region: {createdPokemon.region}<br />
            </ul>
            <ul>
              Numero de la Pokedex: {createdPokemon.pokedexnumber}<br />
            </ul>
            <ul>
              Tipo: {createdPokemon.type}<br />
            </ul>
            <ul>
              Debilidad: {createdPokemon.weakness}<br />
            </ul>
            <ul>
              <img src={createdPokemon.imageUrl} alt={createdPokemon.name} /><br/>
            </ul>
          </div>
        )}
        </div>
      </div>
      <div className='updateform'>
        <h1>Actualizalo en la Base de Datos</h1>
        <p>Se actualizara por Numero en la Pokedex</p>
        <form onSubmit={handleUpdate}>
            <label style={{paddingRight:10}}>Numero de la Pokedex:</label> 
            <input type="text" value={newpokedexnumber} onChange={event => setnewNumber(event.target.value)} /><br/>

            <label style={{paddingRight:86}}>Nombre:</label> 
            <input type="text" value={newname} onChange={event => setnewName(event.target.value)}/><br/>

            <label style={{paddingRight:78}}>Region:</label> 
            <input type="text" value={newregion} onChange={event => setnewRegion(event.target.value)} /><br/>

            <label style={{paddingRight:93}}>Tipo:</label> 
            <input type="text" value={newtype} onChange={event => setnewType(event.target.value)} /><br />

            <label style={{paddingRight:45}}>Debilidad:</label> 
            <input type="text" value={newweakness} onChange={event => setnewWeakness(event.target.value)} /><br />

            <label style={{paddingRight:60}}>Imagen Url:</label> 
            <input type="text" value={newimageUrl} onChange={event => setnewImageUrl(event.target.value)} /><br />

            <button type="submit">Actualiza la Base</button>
        </form>
      </div>

      <div className='deleteform'>
        <h1>Borra de la Base de Datos</h1>
        <p>Borraras por Nombre</p>
        <form onSubmit={handleDelete}>

            <label style={{paddingRight:86}}>Nombre:</label> 
            <input type="text" value={delname} onChange={event => setdelName(event.target.value)}/><br/>

            <label style={{paddingRight:78}}>Region:</label> 
            <input type="text" value={delregion} onChange={event => setdelRegion(event.target.value)} /><br/>

            <label style={{paddingRight:10}}>Numero de la Pokedex:</label> 
            <input type="text" value={delpokedexnumber} onChange={event => setdelNumber(event.target.value)} /><br/>

            <label style={{paddingRight:93}}>Tipo:</label> 
            <input type="text" value={deltype} onChange={event => setdelType(event.target.value)} /><br />

            <label style={{paddingRight:45}}>Debilidad:</label> 
            <input type="text" value={delweakness} onChange={event => setdelWeakness(event.target.value)} /><br />

            <label style={{paddingRight:60}}>Imagen Url:</label> 
            <input type="text" value={delimageUrl} onChange={event => setdelImageUrl(event.target.value)} /><br />

            <button type="submit">Borrar Pokemon</button>
        </form>
      </div>
    </>
  );
}