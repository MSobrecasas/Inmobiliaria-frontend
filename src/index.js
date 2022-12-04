import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'; //
import { UserProvider } from './contexts/UserContext';
import { ClientesProvider } from './contexts/ClientesContext';
import { InmueblesProvider } from './contexts/InmueblesContext';
import { TipoInmueblesProvider } from './contexts/TipoInmuebleContext';
import { VentasProvider } from './contexts/VentasContext'
import { CondicionsProvider } from './contexts/CondicionsContext'
import { FormaPagosProvider } from './contexts/FormaPagosContext'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ClientesProvider>
        <TipoInmueblesProvider>
          <InmueblesProvider>
            <CondicionsProvider>
              <FormaPagosProvider>
                <VentasProvider>
                  <App />
                </VentasProvider>
              </FormaPagosProvider>
            </CondicionsProvider>
          </InmueblesProvider>
        </TipoInmueblesProvider>
      </ClientesProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();