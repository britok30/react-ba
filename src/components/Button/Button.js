import React from 'react';
import './Button.scss';
import Icon from '../../assets/images/add-icon.svg';

const Button = ({ text }) => {
    return (
        <div>
            <button className="button">
                <img className="button__icon" src={Icon} alt="icon" />
                <span className="button__text">{text}</span>
            </button>
        </div>
    );
};

export default Button;
