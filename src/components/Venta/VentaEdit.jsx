import React from 'react'
import './Venta.css'
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { editVentas } from "../../services/VentaService";
import { useContext } from "react";
import { VentasContext } from "../../contexts/VentasContext";
import { FormaPagosContext } from "../../contexts/FormaPagosContext";
import { ClientesContext } from "../../contexts/ClientesContext";
import { InmueblesContext } from "../../contexts/InmueblesContext";
import { CondicionsContext } from "../../contexts/CondicionsContext";

const VentaEdit = () => {

  const { id } = useParams();
  const { ventas } = useContext(VentasContext);
  const [venta] = ventas.filter(
    (venta) => venta.id_venta === Number(id)
  );
  console.log(ventas)

  const { clientes } = useContext(ClientesContext);
  const { inmuebles } = useContext(InmueblesContext);
  const { formaPagos } = useContext(FormaPagosContext);
  const { condicions } = useContext(CondicionsContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id_inmueble: venta.id_inmueble,
      id_cliente: venta.id_cliente,
      id_condicion: venta.id_condicion,
      id_forma_pago: venta.id_forma_pago,
      desc_venta: venta.desc_venta,
      total_venta: venta.total_venta,
      total_iva: venta.total_iva,
      total_general: venta.total_general,
      fecha_venta: venta.fecha_venta,
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
        cargaVenta(data);
        navigate("/ventas");
        Swal.fire("Registro guardado", "Exito", "success");
      } else {
        Swal.fire("Operacion Cancelada", "", "info");
        navigate("/ventas");
      }
    });
  };

  let cargaVenta = (data) => {
    let venta = {
      id_venta : Number,
      id_inmueble: Number,
      id_cliente: Number,
      id_condicion: Number,
      id_forma_pago: Number,
      desc_venta: String,
      total_venta: Number,
      total_iva: Number,
      total_general: Number,
      fecha_venta: Date,
    };

    venta = { ...data };

    venta.id_venta = Number(id) + 0;
    venta.total_venta = Number(data.total_venta) + 0
    venta.total_iva = data.total_venta * 0.21;
    venta.total_general = Number(venta.total_iva + venta.total_venta) + 0;
    const date = new Date();
    const dateTime = date.toISOString().split(".")[0];
    venta.fecha_venta = dateTime;
    console.log(venta);
    try{
      editVentas(venta);
    } catch (e){
      console.log(e)
    }
    
  };

  const handleCancel = () => {
    navigate("/ventas");
  };
  return (
    <section className="container__add">
    <h1>Modificar Venta</h1>
    <form className="venta__form" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label> Inmueble</label>
        <select {...register("id_inmueble")}>
          {inmuebles.map((datum) => (
            <option key={datum.id_inmueble} value={datum.id_inmueble}>
              {datum.desc_inmueble}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label> Cliente</label>
        <select {...register("id_cliente")}>
          {clientes.map((datum) => (
            <option key={datum.id_cliente} value={datum.id_cliente}>
              {datum.nombre_cliente}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Condicion</label>
        <select {...register("id_condicion")}>
          {condicions.map((datum) => (
            <option key={datum.id_condicion} value={datum.id_condicion}>
              {datum.des_condicion}
            </option>
          ))}
        </select>
        <div>
          <label>Forma de Pago</label>
          <select {...register("id_forma_pago")}>
            {formaPagos.map((datum) => (
              <option key={datum.id_forma_pago} value={datum.id_forma_pago}>
                {datum.desc_forma_Pago}
              </option>
            ))}
          </select>
        </div>
      </div>
      <input
        type="text"
        placeholder="Descripcion Venta"
        {...register("desc_venta", {
          required: "Debe ingresar la descripcion",
        })}
      />
      <p className="errors__show">{errors.desc__inmueble?.message}</p>

      <input
        type="number"
        step="any"
        placeholder="Total Venta"
        {...register("total_venta", {
          required: "Debe ingresar el costo",
        })}
      />
      <p className="errors__show">{errors.costo__inmueble?.message}</p>

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
  )
}

export default VentaEdit