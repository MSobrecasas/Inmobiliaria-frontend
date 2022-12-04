import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { addClientes } from "../../services/ClienteService";
import './ClienteAdd.css'
const ClienteAdd = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {},
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
        addClientes(data);
        navigate("/");
        Swal.fire("Registro guardado", "Exito", "success");
      } else {
        Swal.fire("Operacion Cancelada", "", "info");
        navigate("/");
      }
    });
  };

  const handleCancel = () => {
    navigate("/clientes");
  };
  return (
    <section className="container__add">
      <h1>Nuevo Cliente</h1>
      <form className="cliente__form" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="nombre__cliente"
          type="text"
          placeholder="Nombre del cliente"
          {...register("nombre_cliente", {
            required: "Debe ingresar un nombre",
          })}
        />
        <p className="errors__show">{errors.nombre__cliente?.message}</p>
        <input
          className="dir__cliente"
          type="text"
          placeholder="Direccion del cliente"
          {...register("dir_cliente", {
            required: "Debe ingresar la direccion",
          })}
        />
        <p className="errors__show">{errors.dir__cliente?.message}</p>
        <input
          className="correo__cliente"
          type="email"
          placeholder="Email del cliente"
          {...register("correo_cliente", {
            required: "Debe ingresar el correo",
          })}
        />
        <p className="errors__show">{errors.dir__cliente?.message}</p>
        <input
          className="telefono__cliente"
          type="number"
          placeholder="telefono del cliente"
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
            Crear Cliente
          </button>
        </div>
      </form>
    </section>
  );
};

export default ClienteAdd;
