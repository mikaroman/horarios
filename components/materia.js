// src/components/Materia.js
import React from 'react';

const Materia = ({ nombre, profesor, horario }) => (
  <div>
    <h2>{nombre}</h2>
    <p>Profesor: {profesor}</p>
    <p>Horario: {horario}</p>
  </div>
);

export default Materia;
