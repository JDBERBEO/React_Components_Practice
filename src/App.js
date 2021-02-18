import React, { useState } from 'react';
import './App.css';
import { CardContainer } from './components/CardContainer';
import { CreateCardContainer } from './components/CreateCard/CreateCardContainer';

import {datos as initialState} from './utils/Db'



function App() {
    const [datos, setDatos] = useState(initialState)

    const updateDatosState = (dato) => {
      setDatos([{id: datos.length+1, ...dato}, ...datos ])
    }

  return (<>
    <div className='container'>
      <div className='row'>
          {/* {datos.map((element) => <CardView/>)} */}
        <div className='col-3'>
          <CreateCardContainer  updateDatosState={updateDatosState} />
        </div>
     
        <div className='col-9'> 
          <CardContainer datos ={ datos } />
        
        </div> 
      </div>
    </div>
    </>
  );
}

export default App;
