

import React, {  useState } from 'react'


/* import { RegistroForm} from './Componentes/RegistroForm'; */


import './App.css';
import { TaxiForm } from './Componentes/TaxiForm';

import { TaxiFormProvider, useTaxiFormContext } from './Componentes/TaxiFormContext';



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
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <TaxiFormProvider>
      <div className="App">
        <button onClick={openModal}>Abrir Formulario</button>

        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <TaxiForm />
            </div>
          </div>
        )}
      </div>
    </TaxiFormProvider>
  );
};





export default App;

