import React from 'react';
import "../styles/custom-button.scss"
const CustomButton = ({style, txt, onClick}) => {
    return (
        <button style={style} onClick={onClick} className="custom-button">{txt}</button>
    );
};

export default CustomButton;