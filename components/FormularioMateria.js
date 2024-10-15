// src/components/FormularioMateria.js
import React, { useState } from 'react';

import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const FormularioMateria = ({ agregarMateria }) => {
  const [nombre, setNombre] = useState('');
  const [profesor, setProfesor] = useState('');
  const [horario, setHorario] = useState('');

  const manejarSubmit = (e) => {
    e.preventDefault();
    agregarMateria({ nombre, profesor, horario });
    setNombre('');
    setProfesor('');
    setHorario('');
  };

  return (
    <form onSubmit={manejarSubmit}>
      <input
        type="text"
        placeholder="Nombre de la materia"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="text"
        placeholder="Profesor"
        value={profesor}
        onChange={(e) => setProfesor(e.target.value)}
      />
      <input
        type="text"
        placeholder="Horario"
        value={horario}
        onChange={(e) => setHorario(e.target.value)}
      />
      <button type="submit">Añadir Materia</button>
    </form>
  );
};

export default FormularioMateria;
