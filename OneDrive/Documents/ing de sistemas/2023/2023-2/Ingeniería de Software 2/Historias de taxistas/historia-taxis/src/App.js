/* import logo from './logo.svg'; */

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';






/* import { RegistroForm} from './Componentes/RegistroForm'; */


import './App.css';

function App() {
  return (

     <React.Fragment>

    
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              {/* <Link to="/">Inicio</Link> */}
            </li>
            <li>
              {/* <Link to="/registro">Registro</Link> */}
            </li>
            <li>
              {/* <Link to="/iniciar-sesion">Iniciar sesión</Link> */}
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/registro">
            <Registro />
          </Route>
          <Route path="/iniciar-sesion">
            <IniciarSesion />
          </Route>
          <Route path="/">
            <Inicio />
          </Route>
        </Switch>
      </div>
    
    </Router>
    </React.Fragment>
  )  ;
}

function Inicio() {
  return (
    <div>
      <h2>Inicio</h2>
      <p>Bienvenido a la página de inicio.</p>
    </div>
  );
}

function Registro() {
  return (
    <div>
      <h2>Registro</h2>
      {/* Aquí iría el formulario de registro */}
    </div>
  );
}

function IniciarSesion() {
  return (
    <div>
      <h2>Iniciar sesión</h2>
      {/* Aquí iría el formulario de inicio de sesión */}
    </div>
  );
}


export default App;

