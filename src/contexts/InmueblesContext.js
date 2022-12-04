import { createContext, useState } from "react";

export const InmueblesContext = createContext({
    inmuebles: [],
    setInmuebles: () => { }
})

export const InmueblesProvider = ({ children }) => {
    const [inmuebles, setInmuebles] = useState([]);
    const value = { inmuebles, setInmuebles };
    return <InmueblesContext.Provider value={value}>{children}</InmueblesContext.Provider>;
} 