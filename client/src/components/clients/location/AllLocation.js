import React ,{useEffect, useState} from "react";
import axios from "axios";
import  {NavLink} from "react-router-dom" ;

const AllLocation = () => {

    const [biens, setUsers] = useState([]);


    const fetchData = async () => {
        const result = await axios.get("http://localhost:8080/api/all-bien");
        setUsers(result.data);
    };


    //deleted bien  
    const deleteUserData = async(id) => {
        axios.delete(`http://localhost:8080/api/delete-bien/${id}`);
        fetchData();
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            
            <React.Fragment >
                <table className="table mt-5">
                    <thead>
                        <tr>
                            <th scope="col">proprietaire</th>
                            <th scope="col">adresse</th>
                            <th scope="col">etat</th>
                            <th scope="col">nombreAppart</th>
                            <th scope="col">prix</th>
                        </tr>
                    </thead>
                    <tbody>
                        {biens.map((bien, index) => (
                            <tr key={index}>
                                <td>{bien.proprietaire}</td>
                                <td>{bien.adresse}</td>
                                <td>{bien.etat}</td>
                                <td>{bien.nombreAppart}</td>
                                <td>{bien.prix}</td>
                                <td>
                                    <NavLink
                                        className="btn btn-outline-info"
                                        to={`/edite-bien/${bien._id}`}
                                    >
                                        Edite
                                    </NavLink>
                                </td>
                                <td>
                                    <NavLink
                                        className="btn btn-outline-primary"
                                        to={`/show-bien/${bien._id}`}
                                    >
                                        show
                                    </NavLink>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-outline-danger"
                                        onClick={() => deleteUserData(bien._id)}
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
export default AllLocation ;