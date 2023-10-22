// server/index.js

const express = require("express");
const path = require('path');
const PORT = process.env.PORT || 3000;
const app = express();
const bodyParser = require('body-parser');
const fs = require("fs");
const mysql = require('mysql');
const { rejects } = require("assert");

app.use(bodyParser.json());
app.use( express.static( path.resolve( __dirname, '../client/build')));

// ----------------------------------------------------------------------------------------------------

  const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'us-cdbr-east-06.cleardb.net',
    user: 'bfe69e85bdfa02',
    password: '1ff3b80b',
    database: 'heroku_165ba2bac897bae'
  });
  
  pool.getConnection((error, s) =>{
    console.log(error);
  });

  /*
  // Credenciales de MySql
const pool = mysql.createConnection({
  host: 'localhost',
  user: 'miniReto',
  password: 'hola123',
  database: 'pokemon'
})

pool.connect((error, s)=>{
  console.log(error);
});*/


function db_query(query){
  try{
      return new Promise((resolve, reject) => {
        pool.query(query, function (err, result) {
              if (err) throw err;
              resolve(Object.values(result));
          });
        });
  }catch(except){}
}


getKanto = async (req, res) => {
  const response = await db_query("SELECT * FROM iniciales where region = 'Kanto';");
  res.json(response);
  res.end;
}

getJohto = async (req, res) => {
  const response = await db_query("SELECT * FROM iniciales where region = 'Johto';");
  res.json(response);
  res.end;
}

getHoenn = async (req, res) => {
  const response = await db_query("SELECT * FROM iniciales where region = 'Hoenn';");
  res.json(response);
  res.end;
}

getSinnoh = async (req, res) => {
  const response = await db_query("SELECT * FROM iniciales where region = 'Sinnoh';");
  res.json(response);
  res.end;
}

getTeselia = async (req, res) => {
  const response = await db_query("SELECT * FROM iniciales where region = 'Teselia';");
  res.json(response);
  res.end;
}

getKalos = async (req, res) => {
  const response = await db_query("SELECT * FROM iniciales where region = 'Kalos';");
  res.json(response);
  res.end;
}

getAlola = async (req, res) => {
  const response = await db_query("SELECT * FROM iniciales where region = 'Alola';");
  res.json(response);
  res.end;
}

getGalar = async (req, res) => {
  const response = await db_query("SELECT * FROM iniciales where region = 'Galar';");
  res.json(response);
  res.end;
}

getPaldea = async (req, res) => {
  const response = await db_query("SELECT * FROM iniciales where region = 'Paldea';");
  res.json(response);
  res.end;
}


getAll = async (req, res) => {
  const response = await db_query("SELECT imagen FROM iniciales LIMIT 28;");
  res.json(response);
  res.end;
}


getPokemon = async (req, res) => {
  const response = await db_query("SELECT * FROM iniciales ORDER BY nombre DESC LIMIT 1");
  res.json(response);
  res.end;
}

app.get("/api/kanto", getKanto);
app.get("/api/johto", getJohto);
app.get("/api/hoenn", getHoenn);
app.get("/api/sinnoh", getSinnoh);
app.get("/api/teselia", getTeselia);
app.get("/api/kalos", getKalos);
app.get("/api/alola", getAlola);
app.get("/api/galar", getGalar);
app.get("/api/paldea", getPaldea);

app.get("/api/all", getAll);
app.get('/api/getpokemon', getPokemon);


// Metodo post
app.post('/api/pokemon', (req, res) => {
  const { name, region, pokedexnumber, type, weakness, imageUrl } = req.body;
  const sql = "INSERT INTO iniciales (nombre, region, numeroPokedex, tipo, debilidad, imagen) VALUES ('" + name + "', '" + region + "','" + pokedexnumber+ "','" + type + "','" + weakness + "','" + imageUrl + "')";
  pool.query(sql,(error, resultados, fields) =>{
    if(error)throw error;
    console.log(resultados);
  })
  const newPokemon = { name, region, pokedexnumber, type, weakness, imageUrl }
  res.json(newPokemon)
});

app.delete('/api/deletepokemon', (req, res) =>{
  const {delname, delregion, delpokedexnumber, deltype, delweakness, delimageUrl} = req.body;
  const sql =`DELETE FROM iniciales WHERE nombre = '${delname}'`;
  pool.query(sql,(error, resultados, fields) =>{
    if(error)throw error;
    console.log('Deleted');
    const newPokemon = { delname, delregion, delpokedexnumber, deltype, delweakness, delimageUrl };
    res.json(newPokemon);
  })
});

app.put('/api/updatepokemon', (req, res) =>{
  const {newname, newregion, newpokedexnumber, newtype, neweakness, newimageUrl } = req.body;
  const sql = "UPDATE iniciales SET nombre = '"+ newname +"', region = '"+ newregion +"', tipo =  '"+ newtype +"', debilidad = '"+ neweakness +"', imagen = '"+ newimageUrl +"'  WHERE numeroPokedex = '"+ newpokedexnumber +"'"
  pool.query(sql,(error, resultados, fields) =>{
    if(error)throw error;
    console.log('Updated');
    const newPokemon = { newname, newregion, newpokedexnumber, newtype, neweakness, newimageUrl }
    res.json(newPokemon)
  })
})

app.get("/api/message", (req, res) =>{
  res.json({message: "Hola!, soy el profesor Oak. Te doy la bienvenida al mundo Pokemon!"})
});

app.get("/api/message2", (req, res) =>{
  res.json({message: "En esta API podras conocer todo tipo de informacion de los iniciales de cada region, desde su tipo hasta sus estadisticas. Solo elige la region que quieras visitar y continua!"})
});

app.get("/api/message3", (req, res) =>{
  res.json({message: "Te aseguramos que después de visitar todas nuestras secciones tendrás completamente en claro qué Pokemon eligirás para tu siguiente aventura!"})
});

app.get("/api/message4", (req, res) =>{
  res.json({message: "Por ultimo, tambien contamos con una herramienta para crear tu propio Pokemon customizado, no olvides visitarla! Disfruta tu camino Pokemon!"})
});

app.get('*', (req, res) => {
  res.sendFile( path.resolve( __dirname, '../client/build', 'index.html'));
  });  

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}.`);
});
