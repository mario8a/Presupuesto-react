import React, {useState} from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';


function App() {

  //definir el state

  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0)
  //carga condicional
  const [mostrarpregunta, actualizarPregunda] = useState(true);

  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>

        <div className="contenido-principal contenido">

          { 
          mostrarpregunta ? 
            (<Pregunta
              guardarPresupuesto={guardarPresupuesto}
              guardarRestante={guardarRestante}
              actualizarPregunda={actualizarPregunda}
            />
            ) : (
              <div className="row">
                <div className="one-half column">
                  <Formulario/>
                </div>
                <div className="one-half column">
                  2
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
