
// Importamos las dependencias necesarias
import React, { useState } from 'react';
import { useTaxiFormContext } from './TaxiFormContext';
import '../estilos/TaxiForm.css'; // Ajusta la ruta según la ubicación de tu archivo CSS
import Login from './Login'; // Importa el nuevo componente Login


// Definimos el componente TaxiForm
const TaxiForm = () => {

    // Obtenemos los datos del conductor y los manejadores de eventos del contexto
  const { driverInfo, handleChange, handleSubmit } = useTaxiFormContext();

  // Estado para verificar si el formulario ha sido enviado
  const [formSubmitted, setFormSubmitted] = useState(false); 
  const [isLoginVisible, setLoginVisible] = useState(false); //Login
  const [records, setRecords] = useState({}); //...

/* --------------------------- */
 // Estado para almacenar los datos del carro
  const [carInfo, setCarInfo] = useState({
    vehicleMake: '',
    vehicleModel: '',
    vehicleYear: '',
  });

  // Manejador para el envío del formulario
  const handleFormSubmit = (e) => {
    /* handleSubmit(e);
    setFormSubmitted(true); */

    //...
    e.preventDefault();

    // Copiamos el estado actual de los registros
    const newRecords = { ...records };

    // Asignamos un identificador único al registro actual
    const recordId = Date.now().toString();

    // Guardamos el registro del conductor y del carro usando el identificador como clave
    newRecords[recordId] = { driver: { ...driverInfo }, car: { ...carInfo } };

    // Actualizamos el estado de los registros
    setRecords(newRecords);

    setFormSubmitted(true);

  };




  /* -------------------------- */
   // Manejador para los cambios en los datos del carro
  const handleCarChange = (e) => {
    const { name, value } = e.target;
    setCarInfo({
      ...carInfo,
      [name]: value,
    });
  };

  const handleLogin = () => {
    // TODO... la lógica de mostrar la ventana de inicio de sesión
    setLoginVisible(true);
  };

    // Renderizamos el contenido del componente
  return (
    <div className="taxi-form-container">
    <h1 className="form-title">Formulario de Registro de Conductor de Taxi</h1>
    {formSubmitted ? (
      <>
        <div className="confirmation-message">
          <p>Datos enviados correctamente. ¡Gracias!</p>
          {/* TODO... para mostrar aquí los datos que fueron enviados */}
        </div>

            {/* Login sin UTILIZAR */}
          {isLoginVisible && <Login />}

          {/* También mostramos los datos del carro */}
          <div className="confirmation-message">
            <p>Datos del Carro:</p>
            <p>Marca: {carInfo.vehicleMake}</p>
            <p>Modelo: {carInfo.vehicleModel}</p>
            <p>Año: {carInfo.vehicleYear}</p>
          </div>

        </>
      ) : (
        <form onSubmit={handleFormSubmit} className="form">
           {/* Campos del formulario del conductor */}
          <label className="form-label">
            Nombre:
            <input 
              type="text"
              name="name"
              value={driverInfo.name}
              onChange={handleChange}
              className="form-input"
            />
          </label>

          <label className="form-label">
            Apellido:
            <input
              type="text"
              name="lastName"
              value={driverInfo.lastName}
              onChange={handleChange}
              className="form-input"
            />
          </label>

          <label className="form-label">
            Fecha de Nacimiento:
            <input
              type="date"
              name="birthDate"
              value={driverInfo.birthDate}
              onChange={handleChange}
              className="form-input"
            />
          </label>

          <label className="form-label">
            Número de documento:
            <input
              type="text"
              name="idNumber"
              value={driverInfo.idNumber}
              onChange={handleChange}
              className="form-input"
            />
          </label>

          <label className="form-label">
            Correo Electrónico:
            <input
              type="email"
              name="email"
              value={driverInfo.email}
              onChange={handleChange}
              className="form-input"
            />
          </label>

          <label className="form-label">
            Número de telefono:
            <input
              type="text"
              name="phone"
              value={driverInfo.phone}
              onChange={handleChange}
              className="form-input"
            />
          </label>

          <label className="form-label">
            Contraseña:
            <input
              type="text"
              name="passwd"
              value={driverInfo.passwd}
              onChange={handleChange}
              className="form-input"
            />
          </label>

          {/* Resto de los campos del formulario... */}
            {/* sea el caso de agregar mas campos */}

          {/* ------Subformulario para los datos del carro----- */}
          <h2 className="form-subtitle">Datos del Carro</h2>
          <label className="form-label">
            Marca del Carro:
            <input
              type="text"
              name="vehicleMake"
              value={carInfo.vehicleMake}
              onChange={handleCarChange}
              className="form-input"
            />
          </label>

          <label className="form-label">
            Modelo del Carro:
            <input
              type="text"
              name="vehicleModel"
              value={carInfo.vehicleModel}
              onChange={handleCarChange}
              className="form-input"
            />
          </label>

           <label className="form-label">
            Año del Carro:
            <input
              type="text"
              name="vehicleYear"
              value={carInfo.vehicleYear}
              onChange={handleCarChange}
              className="form-input"
            />
          </label>


          {/* Botón para enviar el formulario */}
          <button type="submit" className="form-button">
            Registrar
          </button>
        </form>




      )}
    </div>
  );
};

export default TaxiForm;









export { TaxiForm };