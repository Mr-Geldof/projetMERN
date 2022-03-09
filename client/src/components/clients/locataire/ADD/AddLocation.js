import React, { useState } from "react";
import axios from "axios" ;
const AddLocation = () =>{
    const [bien, setUser] = useState({
        proprietaire: "",
        adresse: "",
        etat: "",
        nombreAppart: "",
        prix: ""
      });
    
      const { proprietaire, adresse, etat, nombreAppart, prix } = bien;
    
      const onInputChange = (e) => {
        setUser({ ...bien, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/api/new-bien", bien);

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
                  Add bien 
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
        </>

    )
}
export default AddLocation ;