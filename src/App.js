import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta';
import Form from './components/Form';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {

  const [ presupuesto, setPresupuesto ] = useState(0);
  const [ restante, setRestante ] = useState(0);
  const [ mostrarpregunta, setMostrarPregunta ] = useState(true);
  const [ gastos, setGastos ] = useState([]);
  const [ gasto, setGasto ] = useState({});
  const [creargasto, setCrearGasto ] = useState(false);

  // useEffect que actualiza el restante
  useEffect(() => {
    if(creargasto) {

      // Agrega el nuevo presupuesto
      setGastos([
        ...gastos,
        gasto
      ]);

      // Resta del presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad;
      setRestante(presupuestoRestante);
      

      // Resetear a false
      setCrearGasto(false);
    }
  }, [gasto, gastos, creargasto, restante]);

  return (
    <div className="container">
      <header>
        <h1>Presupuesto</h1>

        <div className="contenido-principal contenido">
          {mostrarpregunta 
            ? 
              ( 
                <Pregunta 
                  setPresupuesto={setPresupuesto}
                  setRestante={setRestante}
                  setMostrarPregunta={setMostrarPregunta}
                />
              )
            : 
              (
                <div className="row">
                  <div className="one-half column">
                    <Form 
                      setGasto={setGasto}
                      setCrearGasto={setCrearGasto}
                    />
                  </div>
    
                  <div className="one-half column">
                    <Listado 
                      gastos={gastos}
                    />

                    <ControlPresupuesto 
                      presupuesto={presupuesto}
                      restante={restante}
                    />
                  </div>
                </div>
              )
          }

        </div>
      </header>
    </div>
  );
}

export default App;
