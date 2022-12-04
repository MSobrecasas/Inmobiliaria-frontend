import React from "react";
import "./Venta.css";
import { MdDeleteSweep, MdEditNote } from "react-icons/md";
import Swal from "sweetalert2";
import { deleteVentas } from "../../services/VentaService";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ClientesContext } from "../../contexts/ClientesContext";
import { InmueblesContext } from "../../contexts/InmueblesContext";
import { CondicionsContext } from "../../contexts/CondicionsContext";
import { FormaPagosContext } from "../../contexts/FormaPagosContext";

const Venta = ({ venta }) => {
  const { clientes } = useContext(ClientesContext);
  const [cliente] = clientes.filter(
    (cliente) => cliente.id_cliente === Number(venta.id_cliente)
  );

  const { inmuebles } = useContext(InmueblesContext);
  const [inmueble] = inmuebles.filter(
    (inmueble) => inmueble.id_inmueble === Number(venta.id_inmueble)
  );

  const { condicions } = useContext(CondicionsContext);
  const [condicion] = condicions.filter(
    (condicion) => condicion.id_condicion === Number(venta.id_condicion)
  );

  const { formaPagos } = useContext(FormaPagosContext);
  
  const [formaPago] = formaPagos.filter(
    (formaPago) => formaPago.id_forma_pago === Number(venta.id_forma_pago)
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
        deleteVentas(venta.id_venta);
        Swal.fire("asd", "Exito", "success");
      } else {
        Swal.fire("Información", "no paso nada", "info");
      }
    });
  };

  const date = new Date(venta.fecha_venta);
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const formatter = new Intl.DateTimeFormat("es-ES", options);
  const formattedDate = formatter.format(date);
  return (
    <section className="container__venta">
      <h3>
        Inmueble:{" "}
        {inmueble !== undefined ? inmueble.desc_inmueble : venta.id_inmueble}
      </h3>
      <h3>
        Cliente:{" "}
        {cliente !== undefined ? cliente.nombre_cliente : venta.id_cliente}
      </h3>
      <h3>Condicion Venta: {condicion !== undefined ? condicion.des_condicion : venta.id_condicion
      }</h3>
      <h3>Forma de Pago: { formaPago !== undefined ? formaPago.desc_forma_Pago : venta.id_forma_pago}</h3>
      <h3>Descripcion Venta: {venta.desc_venta}</h3>
      <h3>SubTotal: {venta.total_venta}</h3>
      <h3>IVA: {venta.total_iva}</h3>
      <h3>Total: {venta.total_general}</h3>
      <h3>Fecha: {formattedDate}</h3>
      <div>
        <MdDeleteSweep className="delete__btn" onClick={handleDeleted} />
      </div>
      <div>
        <Link
          className="edit__button"
          to={`/ventas/editventa/${venta.id_venta}`}
        >
          <MdEditNote />
        </Link>
      </div>
    </section>
  );
};

export default Venta;
