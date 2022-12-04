import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home/Home';
import Navigation from './routes/Navigation/Navigation';
import Login from './routes/Login/Login';
import Clientes from './routes/Cliente/Clientes';
import ClienteAdd from './components/Cliente/ClienteAdd';
import ClienteEdit from './components/Cliente/ClienteEdit';
import Inmuebles from './routes/Inmueble/Inmuebles';
import InmuebleAdd from './components/Inmueble/InmuebleAdd';
import InmuebleEdit from './components/Inmueble/InmuebleEdit';
import { motion } from 'framer-motion';
import Ventas from './routes/Venta/Ventas';
import VentaAdd from './components/Venta/VentaAdd.jsx'
import VentaEdit from './components/Venta/VentaEdit.jsx'


function App() {

  return (
    <motion.div className='App'>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/clientes' element={<Clientes />} />
          <Route path='/clientes/addcliente' element={<ClienteAdd />} />
          <Route path='/clientes/editcliente/:id' element={<ClienteEdit />} />
          <Route path='/inmuebles' element={<Inmuebles />} />
          <Route path='/inmuebles/addinmueble' element={<InmuebleAdd />} />
          <Route path='/inmuebles/editinmueble/:id' element={<InmuebleEdit />} />
          <Route path='/ventas' element={<Ventas />} />
          <Route path='/ventas/addventa' element={<VentaAdd />} />
          <Route path='/ventas/editventa/:id' element={<VentaEdit />} />
        </Route>
      </Routes>
    </motion.div>
  );
}

export default App;