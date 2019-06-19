import React from 'react';
import './Button.css';

const Button = props => {
    return <div className={props.buttonStyle}>{props.text}</div>
};

export default Button;
