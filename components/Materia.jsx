import React from "react";

function Materia({ materia }) {
  return (
    <div>
      <h3>{materia.nombre}</h3>
      <p>Profesor: {materia.profesor}</p>
      <p>Horario: {materia.horario}</p>
    </div>
  );
}

export default Materia;
