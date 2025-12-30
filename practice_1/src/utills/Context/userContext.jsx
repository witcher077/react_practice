import { createContext, useState } from "react";

export const  UserContext = createContext();

const userContextProvider = ({ children }) => {

    const [user, setUser] = useState({ name: "Ashok", profession: "IT" })

    return <UserContext.Provider value={{ user, setUser }}>
        {children}
    </UserContext.Provider>
}


export default userContextProvider;