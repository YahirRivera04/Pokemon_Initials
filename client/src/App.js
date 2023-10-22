import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./Navbar";
import Oak from "./Oak";
import Footer from "./Footer";

import Kanto from "./pages/Kanto";
import Johto from "./pages/Johto";
import Hoenn from "./pages/Hoenn";
import Sinnoh from "./pages/Sinnoh";
import Teselia from "./pages/Teselia";
import Kalos from "./pages/Kalos";
import Alola from "./pages/Alola";
import Galar from "./pages/Galar";
import Paldea from "./pages/Paldea";
import CreatePKMN from "./pages/CreatePKMN";




function App(){
    return(
        <>
        <Navbar/>
        <div className="component">
        <Routes>
                <Route path="/CreatePKMN" element={<CreatePKMN/>}/>
                <Route path="/" element={<Oak/>}/>
                <Route path="/Kanto" element={<Kanto/>}/>
                <Route path="/Johto" element={<Johto/>}/>
                <Route path="/Hoenn" element={<Hoenn/>}/>
                <Route path="/Sinnoh" element={<Sinnoh/>}/>
                <Route path="/Teselia" element={<Teselia/>}/>
                <Route path="/Kalos" element={<Kalos/>}/>
                <Route path="/Alola" element={<Alola/>}/>
                <Route path="/Galar" element={<Galar/>}/>
                <Route path="/Paldea" element={<Paldea/>}/>

            </Routes>
        </div>
        <div>
            <Footer/> 
        </div> 
        </>
    )
}
export default App;
