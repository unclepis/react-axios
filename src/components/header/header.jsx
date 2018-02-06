import React from 'react';
import './header.css';

export const HeaderPanel = (props) => {
    const configStyle = {
        backgroundImage: `url(${props.header.imgSrc})`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat'
    };
    return (
        <div className="section-container" style={configStyle}>
            <h1 style={{ fontSize: '100%' }}>{props.header.title}</h1>
            <p style={{ color: '#fff' }}>{props.header.content}</p>
        </div>)
}
