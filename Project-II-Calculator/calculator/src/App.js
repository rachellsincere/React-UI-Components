import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import Main from './components/ButtonComponents/MainInputContainer';


const App = () => {
  return (
    <div className="app-container">
      <CalculatorDisplay displayStyle="display" text="0"/>
      <Main />
      
   
   
    </div>
  );
};



export default App;