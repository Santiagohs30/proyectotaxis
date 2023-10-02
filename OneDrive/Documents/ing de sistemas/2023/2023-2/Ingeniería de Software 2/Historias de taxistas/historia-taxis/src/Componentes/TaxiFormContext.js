import React, { createContext, useContext, useState } from 'react';

// Context para manejar el estado del formulario
const TaxiFormContext = createContext();

// Proveedor del contexto
export const TaxiFormProvider = ({ children }) => {
  const [driverInfo, setDriverInfo] = useState({
    name: '',
    age: '',
    licenseNumber: '',
    idNumber: '',
    email: '',
    phone: '',
    vehicleMake: '',
    vehicleModel: '',
    vehicleYear: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDriverInfo({
      ...driverInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Puedes realizar acciones adicionales aquí
    console.log('Información del conductor enviada:', driverInfo);
    // Reiniciar el estado del formulario después de enviar
    setDriverInfo({
      name: '',
      age: '',
      licenseNumber: '',
      idNumber: '',
      email: '',
      phone: '',
      vehicleMake: '',
      vehicleModel: '',
      vehicleYear: '',
    });
  };

  return (
    <TaxiFormContext.Provider value={{ driverInfo, handleChange, handleSubmit }}>
      {children}
    </TaxiFormContext.Provider>
  );
};

// Hook para usar el contexto
export const useTaxiFormContext = () => {
  const context = useContext(TaxiFormContext);
  if (!context) {
    throw new Error('useTaxiFormContext debe usarse dentro de un TaxiFormProvider');
  }
  return context;
};

export {TaxiFormContext}