import { createContext, useState } from "react";

export const TipoInmueblesContext = createContext({
    tipoInmuebles: [],
    setTipoInmuebles: () => { }
})

export const TipoInmueblesProvider = ({ children }) => {
    const [tipoInmuebles, setTipoInmuebles] = useState([]);
    const value = { tipoInmuebles, setTipoInmuebles };
    return <TipoInmueblesContext.Provider value={value}>{children}</TipoInmueblesContext.Provider>;
} 