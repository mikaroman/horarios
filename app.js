import React from "react";
import days from 'days';
import Login from './components/login';
import React, { useState } from 'react';
import ListaMaterias from './components/ListaMateria';
import FormularioMateria from './components/FormularioMateria';


function App() {
  return (
    <div className="App">
      <h1>Login</h1>
      <Login />
    </div>
  );
}

const App = () => {
  const [materias, setMaterias] = useState([
    { nombre: 'Matemáticas', profesor: 'Sr. Pérez', horario: 'Lunes 10:00' },
    { nombre: 'Historia', profesor: 'Sra. Gómez', horario: 'Martes 12:00' },
  ]);

  return (
    <div>
      <h1>Horario de Materias</h1>
      <ListaMaterias materias={materias} />
    </div>
  );
};

export default App;