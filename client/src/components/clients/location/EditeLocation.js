import React, { useState, useEffect } from "react";
import axios from "axios" ;
import { useParams } from "react-router-dom";


const EditeLocation = () =>{
    const [bien, setUser] = useState({
        proprietaire: "",
        adresse: "",
        etat: "",
        nombreAppart: "",
        prix: ""
      });

      const {id} = useParams();
      const { proprietaire, adresse, etat, nombreAppart, prix } = bien;

// recupération du bien
      const fetchData = async () => {
        const result = await axios.get(`http://localhost:8080/api/show-bien/${id}`);
        setUser(result.data);
    };
    useEffect(() => {
        fetchData();
    }, []);


// update
      const onInputChange = (e) => {
        setUser({ ...bien, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8080/api/update-bien/${id}`, bien);

        window.location = "/" ;
      };
    
    return(
        <>
        <div className="container mt-5">
        <div className="row">
          <div className="col-md-8 offset-2">
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="mb-3">
                <label htmlFor="proprietaire" className="form-label">
                  proprietaire
                </label>
                <input
                  value={proprietaire}
                  name="proprietaire"
                  type="text"
                  className="form-control"
                  id="proprietaire"
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
                <label htmlFor="etat" className="form-label">
                  etat
                </label>
                <input
                  value={etat}
                  name="etat"
                  type="text"
                  className="form-control"
                  id="etat"
                  onChange={(e) => onInputChange(e)}
                />
              </div>
               
              <div className="mb-3">
                <label htmlFor="nombreAppart" className="form-label">
                  nombreAppart
                </label>
                <input
                  value={nombreAppart}
                  name="nombreAppart"
                  type="number"
                  className="form-control"
                  id="nombreAppart"
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
                  Edit bien
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

        
        </>

    )
}
export default EditeLocation ;