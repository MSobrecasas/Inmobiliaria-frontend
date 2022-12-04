import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { editClientes } from "../../services/ClienteService";
import { getCliente } from "../../services/ClienteService";
import { useContext } from "react";
import { ClientesContext } from "../../contexts/ClientesContext";
import { useState } from "react";

const ClienteEdit = () => {
  const { id } = useParams();
  const { clientes } = useContext(ClientesContext);
  const [cliente] = clientes.filter(
    (cliente) => cliente.id_cliente === Number(id)
  );

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
        id_cliente : cliente.id_cliente,
        nombre_cliente : cliente.nombre_cliente,
        dir_cliente : cliente.dir_cliente,
        correo_cliente: cliente.correo_cliente,
        telefono_cliente: cliente.telefono_cliente
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    Swal.fire({
      title: "¿Desea guardar el registro?",
      text: "",
      icon: "warning",
      showDenyButton: true,
      denyButtonText: "NO",
      confirmButtonText: "SI",
      confirmButtonColor: "#1CC805",
    }).then((response) => {
      if (response.isConfirmed) {
        console.log(data);
        editClientes(data);
        navigate("/clientes");
        Swal.fire("Registro guardado", "Exito", "success");
      } else {
        Swal.fire("Operacion Cancelada", "", "info");
        navigate("/clientes");
      }
    });
  };

  const handleCancel = () => {
    navigate("/");
  };



  return (
    <section className="container">
      <h1>Modificar</h1>
      <form className="cliente__form" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="nombre__cliente"
          name="nombre__cliente"
          type="text"
          {...register("nombre_cliente", {
            required: "Debe ingresar un nombre",
          })}
        />
        <p className="errors__show">{errors.nombre__cliente?.message}</p>
        <input
          className="dir__cliente"
          type="text"
          {...register("dir_cliente", {
            required: "Debe ingresar la direccion",
          })}
        />
        <p className="errors__show">{errors.dir__cliente?.message}</p>
        <input
          className="correo__cliente"
          type="email"
          {...register("correo_cliente", {
            required: "Debe ingresar el correo",
          })}
        />
        <p className="errors__show">{errors.dir__cliente?.message}</p>
        <input
          className="telefono__cliente"
          type="number"
          {...register("telefono_cliente", {
            required: "Debe ingresar el telefono",
          })}
        />
        <p className="errors__show">{errors.telefono__cliente?.message}</p>
        <div className="buttons">
          <button className="" onClick={handleCancel}>
            Cancelar
          </button>
          <button className="" type="submit">
            Guardar
          </button>
        </div>
      </form>
    </section>
  );
};

export default ClienteEdit;
