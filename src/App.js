import React, { useState, useEffect } from "react";
import Question from "./components/Question";
import Formulario from "./components/Formulario";
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {
  //definir el state
  const [budget, setBudget] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [ showquestion, setQuestion ] =useState(true);
  const [ gastos, addGastos ] = useState([]);
  const [ gasto, guardarGasto ] = useState({});
  const [creargasto, guardarCrearGasto] = useState(false);

  //UseEFffect que actualiza el restante

  useEffect(() => {
    if(creargasto) {
      addGastos([
        ...gastos,
        gasto
      ]); 

      //Resta del presupuesto actual
      const presupuestoRestante = remaining - gasto.cantidad;
      setRemaining(presupuestoRestante);

       // Resetear a false
  guardarCrearGasto(false);
    }
  }, [gasto, creargasto, gastos, remaining]);

 

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>

        <div className="contenido-principal contenido">
          { showquestion ? ( <Question setBudget={setBudget} 
          setRemaining={setRemaining}
          setQuestion={setQuestion} 
          />)   :  (<div className="row">
          <div className="one-half column"></div>
          <Formulario
          guardarGasto= {guardarGasto}
          guardarCrearGasto={guardarCrearGasto}
          />
          <div className="one-half column">
            <Listado
                gastos={gastos}
            />
            <ControlPresupuesto 
            presupuesto={budget}
            restante={remaining}
            />
          </div>
         
        </div>)  }
         

          
        </div>
      </header>
    </div>
  );
}

export default App;
