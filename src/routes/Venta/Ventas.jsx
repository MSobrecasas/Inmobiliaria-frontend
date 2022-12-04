import React from "react";
import "./Ventas.css";
import { useNavigate } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
import { VentasContext } from "../../contexts/VentasContext";
import { useContext, useEffect } from "react";
import { getVentas } from "../../services/VentaService";
import Venta from "./Venta";
import { getClientes } from "../../services/ClienteService";
import { getInmuebles } from '../../services/InmuebleService';
import { getCondicions } from '../../services/CondicionService';
import { getFormaFagoes, getFormaPago } from '../../services/FormaPagoService';
import { ClientesContext } from "../../contexts/ClientesContext";
import { InmueblesContext } from "../../contexts/InmueblesContext";
import { CondicionsContext } from "../../contexts/CondicionsContext";
import { FormaPagosContext } from "../../contexts/FormaPagosContext";

const Ventas = () => {
  const { setVentas } = useContext(VentasContext);
  const { setClientes } = useContext(ClientesContext);
  const { setInmuebles } = useContext(InmueblesContext);
  const { setCondicions } = useContext(CondicionsContext);
  const { setFormaPagos } = useContext(FormaPagosContext);
  const { ventas } = useContext(VentasContext);
  useEffect(() => {
    getVentas()
      .then((data) => {
        setVentas(data);
      })
      .catch((err) => console.log(err));

    getClientes()
      .then((data) => {
        setClientes(data);
      })
      .catch((err) => console.log(err));

    getInmuebles()
      .then((data) => {
        setInmuebles(data);
      })
      .catch((err) => console.log(err));

      getCondicions()
      .then((data) => {
        setCondicions(data);
      })
      .catch((err) => console.log(err));

      getFormaFagoes()
      .then((data) => {
        setFormaPagos(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <section className="container">
      <Link className="" to="/ventas/addventa">
        <h1>Nueva venta</h1>
      </Link>
      <div className="grid__ventas">
        {ventas.map((venta) => (
          <Venta key={venta.id_venta} venta={venta} />
        ))}
      </div>
      <div></div>
      <Outlet />
    </section>
  );
};

export default Ventas;
