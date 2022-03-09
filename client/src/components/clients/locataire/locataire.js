import AllLocataire from "./AllLocataire";
import { Link, Outlet} from "react-router-dom";

const Locataire =()=>{
    return(
        <div className="location">
            <h1 className="titre">Liste Locataire</h1>
            <Link to="/location/addLocation"><button type="button" class="btn btn-primary">Add Locataire</button></Link>
            <Link to="/"><button type="button" class="btn btn-success">Retour</button></Link>
            <AllLocataire />
            <Outlet />
        </div>
    )
};
export default Locataire;