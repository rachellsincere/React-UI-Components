import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';

const HeaderTitle = () => {
    return (
        <div className="header-title">
        <h1 className="title-text">Lambda School</h1>
        <p className="handle-text">@LambdaSchool</p>
        <p className="timestamp">&#xb7; 26 Jan</p>
        <HeaderContent />
        </div>
    );
};

export default HeaderTitle;