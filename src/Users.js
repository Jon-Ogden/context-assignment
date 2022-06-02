import UserCard from "./UserCard"
import { useContext } from "react"
import { UserContext } from "./providers/UserProvider"

export default function Users() {
    const data = useContext(UserContext);
    const renderUsers = () =>{
        return data.users.map((c) => {
            return <UserCard key={c.id} {...c}/>
        });
    }
    return(
        <div className="user-page">
            <h1 className="title">The Guardians of the clan of Trolls</h1>
            <div className="cards">{renderUsers()}</div>
        </div>
    )
}