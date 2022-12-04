import { createContext, useState } from "react";

export const CondicionsContext = createContext({
    condicions: [],
    setCondicions: () => { }
})

export const CondicionsProvider = ({ children }) => {
    const [condicions, setCondicions] = useState([]);
    const value = { condicions, setCondicions };
    return <CondicionsContext.Provider value={value}>{children}</CondicionsContext.Provider>;
} 