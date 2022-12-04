import React from "react";
import "./Cliente.css";
import { MdDeleteSweep, MdEditNote } from "react-icons/md";
import Swal from "sweetalert2";
import { deleteClientes } from "../../services/ClienteService";
import { Link } from "react-router-dom";

const Cliente = ({ cliente }) => {
  const handleDeleted = () => {
    Swal.fire({
      title: "Desea borrar el registro?",
      text: "seguro?",
      icon: "error",
      showDenyButton: true,
      denyButtonText: "NO",
      confirmButtonText: "SI",
      confirmButtonColor: "#00FF00",
    }).then((response) => {
      if (response.isConfirmed) {
        deleteClientes(cliente.id_cliente);
        Swal.fire("asd", "Exito", "success");
      } else {
        Swal.fire("Información", "no paso nada", "info");
      }
    });
  };
  return (
    <section className="container__cliente">
      <h3>Nombre: {cliente.nombre_cliente}</h3>
      <h3>Direccion: {cliente.dir_cliente}</h3>
      <h3>E-mail: {cliente.correo_cliente}</h3>
      <h3>Telefono: {cliente.telefono_cliente}</h3>
      <div>
        <MdDeleteSweep className="delete__btn" onClick={handleDeleted} />
      </div>
      <div>
        <Link
          className="edit__button"
          to={`/clientes/editCliente/${cliente.id_cliente}`}
        >
          <MdEditNote />
        </Link>
      </div>
    </section>
  );
};

export default Cliente;
