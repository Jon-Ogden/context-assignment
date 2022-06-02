import {useContext, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { UserContext } from "./providers/UserProvider"

export default function Home(){
    let Navigate = useNavigate();
    const data = useContext(UserContext)

    let [name, setName] = useState("")
    let [guardianClass, setGuardianClass] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        let newUser = {id: Math.random(), name, guardianClass};
        data.addUser(newUser)
        Navigate("/Users")
    };

    return(
        <div className="page">
            <h1>Add to the list!</h1>
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