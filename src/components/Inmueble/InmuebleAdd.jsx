import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { addInmuebles } from "../../services/InmuebleService";
import { useContext } from "react";
import { InmueblesContext } from "../../contexts/InmueblesContext";
import { TipoInmueblesContext } from "../../contexts/TipoInmuebleContext";
import "./InmuebleAdd.css";

const InmuebleAdd = () => {
  const { inmuebles } = useContext(InmueblesContext);
  const { tipoInmuebles } = useContext(TipoInmueblesContext);

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
        inmuebeAux(data)
        navigate("/inmuebles");
        Swal.fire("Registro guardado", "Exito", "success");
      } else {
        Swal.fire("Operacion Cancelada", "", "info");
        navigate("/inmuebles");
      }
    });
  };

  let inmuebeAux = (data) => {
     let dataInmbuele ={
      id_tipo_inmueble : null,
      desc_inmueble : String,
      ubic_inmueble: String,
      latitud: Number,
      longitud: Number,
      costo_inmueble: Number
     }
     dataInmbuele = {...data}
     dataInmbuele.id_tipo_inmueble = dataInmbuele.id_tipo_inmueble - 0
    console.log(dataInmbuele)
    addInmuebles(dataInmbuele);
  };

  const handleCancel = () => {
    navigate("/inmuebles");
  };
  return (
    <section className="container__add">
      <h1>Nuevo Inmueble</h1>
      <form className="inmueble__form" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label> Tipo de Terreno</label>
          <select {...register("id_tipo_inmueble")}>
            {tipoInmuebles.map((datum) => (
              <option
                key={datum.id_tipo_inmueble}
                value={datum.id_tipo_inmueble}
              >
                {datum.desc_inmueble}
              </option>
            ))}
          </select>
        </div>
        <input
          type="text"
          placeholder="Descripcion"
          {...register("desc_inmueble", {
            required: "Debe ingresar la descripcion",
          })}
        />
        <p className="errors__show">{errors.desc__inmueble?.message}</p>
        <input
          type="text"
          placeholder="Ubicacion"
          {...register("ubic_inmueble", {
            required: "Debe ingresar la ubicacion",
          })}
        />
        <p className="errors__show">{errors.ubic__inmueble?.message}</p>
        {/* <input
          type="number"
          step="any"
          placeholder="Latitud"
          {...register("latitud", {
            required: "Debe ingresar una lalitud entre -90 y 90",
            min: -90,
            max: 90,
          })}
        />
        <p className="errors__show">{errors.latitud?.message}</p>
        <input
          type="number"
          step="any"
          placeholder="Longitude"
          {...register("longitud", {
            required: "Debe ingresar una longitud entre -180 y 180",
            min: -180,
            max: 180,
          })}
        />
        <p className="errors__show">{errors.longitud?.message}</p> */}
        <input
          type="number"
          step="any"
          placeholder="Costo"
          {...register("costo_inmueble", {
            required: "Debe ingresar el costo",
          })}
        />
        <p className="errors__show">{errors.costo__inmueble?.message}</p>

        <div className="buttons">
          <button className="" onClick={handleCancel}>
            Cancelar
          </button>
          <button className="" type="submit">
            Crear Inmueble
          </button>
        </div>
      </form>
    </section>
  );
};

export default InmuebleAdd;
