

import React, {  useState } from 'react'


/* import { RegistroForm} from './Componentes/RegistroForm'; */


import './App.css';
import { TaxiForm } from './Componentes/TaxiForm';

import { TaxiFormProvider } from './Componentes/TaxiFormContext';
import Login from './Componentes/Login';



/* function App() {
  return ( */

   /*   <React.Fragment> */

    {/* <div>
      <TaxiForm/> */}
    /* </div> */
    {/* <Inicio/> */}
    /* </React.Fragment> */
 /*  )  ; */
/* } */

// Componente principal
const App = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [isLoginVisible, setLoginVisible] = useState(false);

  const openForm = () => {
    setFormVisible(true);
    setLoginVisible(false);
  };

  const openLogin = () => {
    setLoginVisible(true);
    setFormVisible(false);
  };

  const closeWindows = () => {
    setFormVisible(false);
    setLoginVisible(false);
  };

  return (
    <TaxiFormProvider>
      <div className="App">
        <button onClick={openForm}>Abrir Formulario</button>
        <button onClick={openLogin}>Abrir Login</button>

        {isFormVisible && <TaxiForm />}
        {isLoginVisible && <Login />}

        {/* El botón de cerrar ventanas solo es visible si alguna ventana está abierta */}
        {isFormVisible || isLoginVisible ? (
          
          <button onClick={closeWindows}>Cerrar Ventanas</button>
        ) : null}
      </div>
    </TaxiFormProvider>
  );
};

export default App;
/* En este código, he agregado un nuevo botón <button onClick={openLogin}>Abrir Login</button> junto al botón que abre el formulario. También he agregado un nuevo botón <button onClick={closeWindows}>Cerrar Ventanas</button> que te permitirá cerrar todas las ventanas abiertas.

Este es solo un ejemplo, y puedes ajustar la lógica según tus necesidades específicas y el flujo de tu aplicación. */










  



