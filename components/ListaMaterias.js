
import React from 'react';
import Materia from './materia';

const ListaMaterias = ({ materias }) => (
  <div>
    {materias.map((materia, index) => (
      <Materia key={index} {...materia} />
    ))}
  </div>
);

export default ListaMaterias;
