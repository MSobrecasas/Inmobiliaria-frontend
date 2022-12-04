import React from "react";
import { InmueblesContext } from "../../contexts/InmueblesContext";
import Inmueble from "./Inmueble"
import { Link, Outlet } from "react-router-dom";
import "./Inmuebles.css"
import { useContext, useEffect } from 'react';
import { getInmuebles } from '../../services/InmuebleService';
import { TipoInmueblesContext } from '../../contexts/TipoInmuebleContext'
import { getTipoInmuebles } from '../../services/TipoInmuebleService'

const Inmuebles = () => {
  const { setInmuebles } = useContext(InmueblesContext)
  const { setTipoInmuebles } = useContext(TipoInmueblesContext)
  const { inmuebles } = useContext(InmueblesContext);
  useEffect(() => {
     getInmuebles()
       .then((data) => {
         setInmuebles(data);
       })
       .catch((err) => console.log(err));
     getTipoInmuebles()
       .then((data) => {
         setTipoInmuebles(data);
       })
       .catch((err) => console.log(err));
   }, [])
  return (
    <section className="container">
      <div>
        <Link className="" to="/inmuebles/addinmueble">
          <h1>Nuevo inmueble</h1> 
        </Link>
      </div>
      <div className="grid__inmueble">
        {inmuebles.map((inmueble) => (
          <Inmueble key={inmueble.id_inmueble} inmueble={inmueble} />
        ))}
      </div>

      
      <Outlet />
    </section>
  );
};

export default Inmuebles;
