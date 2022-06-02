import { UserContext } from "./providers/UserProvider";
import { useNavigate } from "react-router-dom";

const UserCard = ({id, name, guardianClass}) => {
    let navigate = useNavigate();
    const routeChange = (id) =>{
        let path = `/Users/${id}/update`
        navigate(path);
    }
    return(
        <div className="user-card">
            <h4>{name}</h4>
            <p>The Guardian {name} is a {guardianClass}</p>
            <button onClick={() => {routeChange(id)}}>Update</button>
        </div>
    )
}
export default UserCard;