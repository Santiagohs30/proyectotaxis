import React, { useState } from 'react';
import { useTaxiFormContext } from './TaxiFormContext';
import '../estilos/TaxiForm.css'; // Ajusta la ruta según la ubicación de tu archivo CSS
import Login from './Login'; // Importa el nuevo componente Login



const TaxiForm = () => {
  const { driverInfo, handleChange, handleSubmit } = useTaxiFormContext();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoginVisible, setLoginVisible] = useState(false);

/* --------------------------- */
  const [carInfo, setCarInfo] = useState({
    vehicleMake: '',
    vehicleModel: '',
    vehicleYear: '',
  });

  const handleFormSubmit = (e) => {
    handleSubmit(e);
    setFormSubmitted(true);
  };

  /* -------------------------- */
  const handleCarChange = (e) => {
    const { name, value } = e.target;
    setCarInfo({
      ...carInfo,
      [name]: value,
    });
  };

  const handleLogin = () => {
    // Aquí puedes realizar la lógica de mostrar la ventana de inicio de sesión
    setLoginVisible(true);
  };

  return (
    <div className="taxi-form-container">
    <h1 className="form-title">Formulario de Registro de Conductor de Taxi</h1>
    {formSubmitted ? (
      <>
        <div className="confirmation-message">
          <p>Datos enviados correctamente. ¡Gracias!</p>
          {/* Puedes mostrar aquí los datos que fueron enviados si lo deseas */}
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