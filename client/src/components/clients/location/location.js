import AllLocation from "./AllLocation";
import { Link, Outlet } from "react-router-dom";
const Location = () => {
    return (
        <div className="location">
            <h1 className="titre">Liste de Location</h1>
            <Link to="/location/addLocation"><button className="bnt2" type="button" class="btn btn-primary">Add Location</button></Link>
            <Link to="/location/editlocation"><button className="bnt2" type="button" class="btn btn-primary">Update</button></Link>
            <Link to="/"><button className="btn2" type="button" class="btn btn-success">Retour</button></Link>
            <AllLocation />
            <Outlet />
        </div>
    )
};
export default Location;