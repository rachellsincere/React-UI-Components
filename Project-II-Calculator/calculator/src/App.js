import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

NumberButton.defaultProps ={ 
  buttonStyle: 'white'

   };

const App = () => {
  return (
    <div>
      <CalculatorDisplay />
      <ActionButton /> 
      <NumberButton />
   
   
    </div>
  );
};



export default App;