import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import Main from './components/ButtonComponents/MainInputContainer';
//import NumberButton from './components/ButtonComponents/NumberButton';

/*NumberButton.defaultProps ={ 
  buttonStyle: 'white'

   }; */

const App = () => {
  return (
    <div className="app-container">
      <CalculatorDisplay displayStyle="display" text="0"/>
      <Main />
      {/* <NumberButton /> */}
   
   
    </div>
  );
};



export default App;