import { useContext, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import "./Navigation.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useScroll } from "../../components/controls/UseScroll";

const Navigation = () => {
  const [element, controls] = useScroll();
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(false);

  /* Local Storage */
  useEffect(() => {
    const userStored = localStorage.getItem("currentUser");
    if (userStored) {
      setCurrentUser(JSON.parse(userStored));
    }
  }, []);

  const handleSignOut = () => {
    setCurrentUser(null);
    localStorage.clear();
    setIsNavOpen(false);
    navigate("/");
  };

  return (
    <div className="navigation">
      <nav>
        <Link className="alink" to="/">
          Home
        </Link>

        <Link className="alink" to="/clientes">
          Clientes 
        </Link>

        <Link className="alink" to="/inmuebles">
          Inmuebles
        </Link>

        <Link className="alink" to="/ventas">
           Venta
        </Link>

        <Link className="alink" to="/ventas">
           OTROS
        </Link>
        <div className="animation start-home"></div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navigation;
