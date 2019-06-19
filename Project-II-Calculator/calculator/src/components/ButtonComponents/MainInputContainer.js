import React from 'react';
import './Main.css';
import Button from './Button';

const Main = () => {
    return (
        <div className="main-container">
            <Button buttonStyle="action-btn" text="clear" />
            <Button buttonStyle="function-btn" text="&#xf7;" />
            <Button buttonStyle="number-btn" text="7" />
            <Button buttonStyle="number-btn" text="8" />
            <Button buttonStyle="number-btn" text="9" />
            <Button buttonStyle="function-btn" text="&#xd7;" />
            <Button buttonStyle="number-btn" text="4" />
            <Button buttonStyle="number-btn" text="5" />
            <Button buttonStyle="number-btn" text="6" />
            <Button buttonStyle="function-btn" text="-" />
            <Button buttonStyle="number-btn" text="1" />
            <Button buttonStyle="number-btn" text="2" />
            <Button buttonStyle="number-btn" text="3" />
            <Button buttonStyle="function-btn" text="+" />
            <Button buttonStyle="action-btn" text="0" />
            <Button buttonStyle="function-btn" text="=" />


        </div>
    );
};


export default Main;