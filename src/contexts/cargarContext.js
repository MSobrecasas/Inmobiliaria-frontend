import React from "react";
import { useContext, useEffect } from "react";
import { ClientesContext } from "./ClientesContext";
import { VentasContext } from "./VentasContext";
import { getClientes } from "../services/ClienteService";
import { getVentas } from "../services/VentaService";
export const CargarDatos = () =>{
    const { setVentas } = useContext(VentasContext);
    getVentas()
    .then((data) => {
      setVentas(data);
    })
    .catch((err) => console.log(err));

    const { setClientes } = useContext(ClientesContext);
    getClientes()
    .then((data) => {
      setClientes(data);
    })
    .catch((err) => console.log(err));

}