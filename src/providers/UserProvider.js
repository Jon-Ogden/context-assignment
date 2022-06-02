import React, { useState } from "react";

export const UserContext = React .createContext()

const initialUsers = [
    {id:0, name:"Bobylob", guardianClass:"Hunter"},
    {id:1, name:"OhioThunder007", guardianClass:"Titan"},
    {id:2, name:"ArcticAbster", guardianClass:"Warlock"},
]

const UserProvider = (props)=>{
    const [users, setUsers] = useState(initialUsers);

    const updateInfo = (newInfo) => {
        let newUsers = users.map((c) => (c.id == newInfo.id ? newInfo : c))
        setUsers(newUsers)
    }
    const addUser =(newUser) => {
        setUsers([...users, newUser])
    }

    return (
        <UserContext.Provider value={{users, updateInfo, addUser}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserProvider;