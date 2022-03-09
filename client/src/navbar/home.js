import React from "react";
import { Link } from "react-router-dom";
import "./navBar.css";
const Home =()=>{
    return(
        <div>
            <h1 className="titre">Bienvenu sur notre Gestion Immobiliere</h1>
        <nav className="navBar">
            
            <ul>
                <button className="bnt1"><Link className="lien" to="/location">Location</Link></button>
                <button className="bnt1"><Link className="lien" to="/locataire" >Locataire</Link></button>
            </ul>
        </nav>
        </div>
    )
};
export default Home;