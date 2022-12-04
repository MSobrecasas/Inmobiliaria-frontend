import { createContext, useState } from "react";

export const FormaPagosContext = createContext({
    formaPagos: [],
    setFormaPagos: () => { }
})

export const FormaPagosProvider = ({ children }) => {
    const [formaPagos, setFormaPagos] = useState([]);
    const value = { formaPagos, setFormaPagos };
    return <FormaPagosContext.Provider value={value}>{children}</FormaPagosContext.Provider>;
} 