import React from "react";
import Materia from "./Materia";

function DiaSemana({ materias }) {
  return (
    <div>
      <h2>{materias[0]?.dia}</h2>
      {materias.map((materia) => (
        <Materia key={materia.nombre} materia={materia} />
      ))}
    </div>
  );
}

export default DiaSemana;
