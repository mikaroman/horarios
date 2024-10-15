import React from "react";
import DiaSemana from "./DiaSemana";
import { DIAS_SEMANA } from "./constants";

function HorarioTabla({ materias }) {
  const materiasPorDia = DIAS_SEMANA.map((dia, index) => ({
    dia,
    materias: materias.filter(
      (materia) => materia.diaSemana === index + 1
    ),
  }));

  return (
    <div>
      <table>
        <thead>
          <tr>
            {DIAS_SEMANA.map((dia) => (
              <th key={dia}>{dia}</th>
            ))}
          </tr>
        </thead>
        <tbody>
        <tr>
            {materiasPorDia.map((dia, index) => (
              <td key={index}>
                <DiaSemana materias={dia.materias} />
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default HorarioTabla;
