import { createContext, useState } from "react";

export const VentasContext = createContext({
    ventas: [],
    setVentas: () => { }
})

export const VentasProvider = ({ children }) => {
    const [ventas, setVentas] = useState([]);
    const value = { ventas, setVentas };
    return <VentasContext.Provider value={value}>{children}</VentasContext.Provider>;
} 