import React ,{useEffect, useState} from "react";
import axios from "axios";
import  {NavLink} from "react-router-dom" ;
import EditeLocataire from "./EditeLocataire";

const AllLocataire = () => {

    const [locataire, setUsers] = useState([]);


    const fetchData = async () => {
        const result = await axios.get("http://localhost:8080/api/all-locataire");
        setUsers(result.data);
    };


    //deleted bien  
    const deleteUserData = async(id) => {
        axios.delete(`http://localhost:8080/api/delete-locataire/${id}`);
        fetchData();
    }
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            
            <React.Fragment >
                <table className="table table-striped mt-3">
                    <thead>
                        <tr>
                            <th scope="col">nom</th>
                            <th scope="col">prenom</th>
                            <th scope="col">tel</th>
                            <th scope="col">CNI</th>
                            <th scope="col">adresse</th>
                            <th scope="col">prix</th>
                        </tr>
                    </thead>
                    <tbody>
                        {locataire.map((locataire, index) => (
                            <tr key={index}>
                                <td>{locataire.nom}</td>
                                <td>{locataire.prenom}</td>
                                <td>{locataire.tel}</td>
                                <td>{locataire.CNI}</td>
                                <td>{locataire.adresse}</td>
                                <td>{locataire.prix}</td>
                                <td>
                                    <NavLink
                                        to={`/edite-locataire/${locataire._id}`}
                                    >
                                        <button className="btn" onClick={() =>(locataire._id)}>
                                            Edite
                                            </button>
                                    </NavLink>
                                </td>
                                <td>
                                    <NavLink
                                        className="btn btn-outline-primary"
                                        to={`/show-locataire/${locataire._id}`}
                                    >
                                        show
                                    </NavLink>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-outline-danger"
                                        onClick={() => deleteUserData(locataire._id)}
                                        >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </React.Fragment>
            
        </>
    );
};
export default AllLocataire ;