import React from "react";
import "./Inmueble.css"
import { MdDeleteSweep, MdEditNote } from "react-icons/md";
import Swal from "sweetalert2";
import { deleteInmuebles } from "../../services/InmuebleService";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { TipoInmueblesContext } from "../../contexts/TipoInmuebleContext";

const Inmueble = ({ inmueble }) => {
    
  const { tipoInmuebles } = useContext(TipoInmueblesContext);
  const [tipoInmueble] = tipoInmuebles.filter(
    (tipoInmueble) =>
      tipoInmueble.id_tipo_inmueble === Number(inmueble.id_inmueble)
  );
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
        deleteInmuebles(inmueble.id_inmueble);
        Swal.fire("asd", "Exito", "success");
      } else {
        Swal.fire("Información", "no paso nada", "info");
      }
    });
  };

  return (
    <section className="container__inmueble">
      <h3>Tipo Inmueble: {tipoInmueble !== undefined ? (
        tipoInmueble.desc_inmueble
      ):(inmueble.id_tipo_inmueble)}</h3>
      <h3>Descripcion: {inmueble.desc_inmueble}</h3>
      <h3>Ubicacion: {inmueble.ubic_inmueble}</h3>
      {/* <h3>Latitud: {inmueble.latitud}</h3>
      <h3>Longitud: {inmueble.longitud}</h3> */}
      <h3>Costo: {inmueble.costo_inmueble}</h3>
      <div>
        <MdDeleteSweep className="delete__btn__in" onClick={handleDeleted} />
      </div>
      <div>
          <Link className="edit__button"  to={`/inmuebles/editinmueble/${inmueble.id_inmueble}`}>
            <MdEditNote />
          </Link>
      </div>
    </section>
  );
};

export default Inmueble;
