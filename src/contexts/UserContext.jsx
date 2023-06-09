import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export default function UserProvider({ children }) {
    const userExists = JSON.parse(localStorage.getItem("user"));
    const [user, setUser] = useState(userExists !== null ? userExists : {});
    const navigate = useNavigate();

    useEffect(() => {
        if (userExists === null) {
            navigate("/");
        } else {
            navigate("/home");
        }
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}