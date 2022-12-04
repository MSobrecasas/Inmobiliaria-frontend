import { createContext, useState } from "react";

export const ClientesContext = createContext({
    clientes: [],
    setClientes: () => { }
})

export const ClientesProvider = ({ children }) => {
    const [clientes, setClientes] = useState([]);
    const value = { clientes, setClientes };
    return <ClientesContext.Provider value={value}>{children}</ClientesContext.Provider>;
} 