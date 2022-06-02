import {useContext, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { UserContext } from "./providers/UserProvider"

export default function UpdateForm(){
    let Navigate = useNavigate();
    let params = useParams();
    const data = useContext(UserContext)

    let target = data.users.filter(c => c.id == params.id)
    let [name, setName] = useState(target[0].name)
    let [guardianClass, setGuardianClass] = useState(target[0].guardianClass)

    const handleSubmit = (e) => {
        e.preventDefault();
        let newInfo = {id: params.id, name, guardianClass};
        data.updateInfo(newInfo)
        Navigate("/Users")
    };
    return(
        <div className="page">
      <h1>Update info Here</h1>
        <form onSubmit={handleSubmit}>
            <p>Username</p>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <p>Class</p>
            <input value={guardianClass} onChange={(e) => setGuardianClass(e.target.value)} />
            <button>Update</button>
        </form>
      </div>
    )
}