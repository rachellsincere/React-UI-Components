import React from 'react';
import './Main.css';
import Button from './Button';

const Main = () => {
    return (
        <div className="main-container">
            <Button buttonStyle="action-btn" text="clear" />
            <Button buttonStyle="function-btn" text="&#xf7;" />


        </div>
    );
};


export default Main;