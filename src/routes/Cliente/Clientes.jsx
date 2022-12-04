import React from "react";
import "./Clientes.css";
import Cliente from "./Cliente";
import { useNavigate } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
import { ClientesContext } from "../../contexts/ClientesContext";
import { useContext, useEffect } from "react";
import { getClientes } from "../../services/ClienteService";

const Clientes = () => {
  const { setClientes } = useContext(ClientesContext);
  const { clientes } = useContext(ClientesContext);
  useEffect(() => {
    getClientes()
      .then((data) => {
        setClientes(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <section className="container">
      <Link className="" to="/clientes/addcliente">
        <h1>Nuevo cliente</h1>
      </Link>
      <div className="grid__clientes">
        {clientes.map((cliente) => (
          <Cliente key={cliente.id_cliente} cliente={cliente} />
        ))}
      </div>

      <div></div>
      <Outlet />
    </section>
  );
};

export default Clientes;
