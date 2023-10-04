import React, { useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import Card from './components/Card/Card';



function App() {
  const [cardValues, setCardValues] = useState(0);
  // let formValues = {cardHolderName: 'Avinash', cardNumber: '7658765876587658', cvv: '878', mm:'12', yy: '87'}
  return (
    <>
      <div className='bg'>
        <div className='left'>
  
          <Card {...cardValues} />
        </div>

        <div className='right'>
          <Form setCardValues={setCardValues}/>
        </div>

      </div>


    </>
  );
}

export default App;
