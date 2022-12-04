import "./Home.css";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ClientesContext } from "../../contexts/ClientesContext";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  const { clientes } = useContext(ClientesContext);
  return (
    <section className="home__container">
      <div className="main-container">
        <h1>Bienvenido a nuestra inmobiliaria</h1>
        <p>
          En nuestra inmobiliaria ofrecemos una amplia selección de propiedades
          en venta y alquiler. Nuestro equipo está altamente capacitado para
          ayudarte a encontrar el hogar perfecto para ti. No dudes en
          contactarnos para más información.
        </p>
      </div>
    </section>
  );
};

export default Home;
