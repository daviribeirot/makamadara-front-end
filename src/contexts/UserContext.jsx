import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

const UserContext = createContext();
export default UserContext;

export function UserProvider({ children }) {
    const [userData, setUserData] = useLocalStorage('userData', null);

    const navigate = useNavigate();

    useEffect(() => {
        if (!userData) navigate("/")
    }, [userData]);

    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserContext.Provider>
    )
}