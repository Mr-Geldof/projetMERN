import React, { useState, useEffect } from "react";
import axios from "axios" ;
import { useParams } from "react-router-dom";


const EditeLocataire = () =>{
    const [locataire, setUser] = useState({
        nom: "",
        prenom:"",
        tel:"",
        CNI:"",
        adresse:"",
        prix:""
      });

      const {id} = useParams();
      const { nom, prenom, tel, CNI, adresse, prix } = locataire;

// recupération du bien
      const fetchData = async () => {
        const result = await axios.get(`http://localhost:8080/api/show-locataire/${id}`);
        setUser(result.data);
    };
    useEffect(() => {
        fetchData();
    }, []);


// update
      const onInputChange = (e) => {
        setUser({ ...locataire, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8080/api/update-locataire/${id}`, locataire);

        window.location = "/" ;
      };
    
    return(
        <>
        <div className="container mt-5">
        <div className="row">
          <div className="col-md-8 offset-2">
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="mb-3">
                <label htmlFor="nom" className="form-label">
                  nom
                </label>
                <input
                  value={nom}
                  name="nom"
                  type="text"
                  className="form-control"
                  id="nom"
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="prenom" className="form-label">
                  prenom
                </label>
                <input
                  value={prenom}
                  name="prenom"
                  type="text"
                  className="form-control"
                  id="prenom"
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="tel" className="form-label">
                  tel
                </label>
                <input
                  value={tel}
                  name="tel"
                  type="number"
                  className="form-control"
                  id="tel"
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="CNI" className="form-label">
                  CNI
                </label>
                <input
                  value={CNI}
                  name="CNI"
                  type="number"
                  className="form-control"
                  id="CNI"
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="adresse" className="form-label">
                  adresse
                </label>
                <input
                  value={adresse}
                  name="adresse"
                  type="text"
                  className="form-control"
                  id="adresse"
                  onChange={(e) => onInputChange(e)}
                />
              </div>
               
              
              <div className="mb-3">
                <label htmlFor="prix" className="form-label">
                prix
                </label>
                <input
                  value={prix}
                  name="prix"
                  type="number"
                  className="form-control"
                  id="prix"
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="d-grid gap-2">
                <button className="btn btn-primary" type="submit">
                  Edit Locataire
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

        
        </>

    )
}
export default EditeLocataire ;