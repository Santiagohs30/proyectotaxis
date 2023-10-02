import React, { useContext, useState } from 'react';
import { useTaxiFormContext } from './TaxiFormContext';
import '../estilos/TaxiForm.css'; // Ajusta la ruta según la ubicación de tu archivo CSS



const TaxiForm = () => {
  const { driverInfo, handleChange, handleSubmit } = useTaxiFormContext();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    handleSubmit(e);
    setFormSubmitted(true);
  };

  return (
    <div className="taxi-form-container">
      <h1 className="form-title">Formulario de Registro de Conductor de Taxi</h1>
      {formSubmitted ? (
        <div className="confirmation-message">
          <p>Datos enviados correctamente. ¡Gracias!</p>
          {/* Puedes mostrar aquí los datos que fueron enviados si lo deseas */}
        </div>
      ) : (
        <form onSubmit={handleFormSubmit} className="form">
          <label className="form-label">
            Nombre del Conductor:
            <input
              type="text"
              name="name"
              value={driverInfo.name}
              onChange={handleChange}
              className="form-input"
            />
          </label>

          <label className="form-label">
            Apellido del Conductor:
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
            Cédula del Conductor:
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
            Teléfono del Conductor:
            <input
              type="text"
              name="phone"
              value={driverInfo.phone}
              onChange={handleChange}
              className="form-input"
            />
          </label>

          {/* Resto de los campos del formulario... */}

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