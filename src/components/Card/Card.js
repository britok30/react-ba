import React from 'react';
import './Card.scss';

const Card = ({ name, title, properties, avatar, isActive, setId }) => {
    return (
        <div
            onClick={() => setId()}
            className={`card__container ${
                isActive ? 'card__container--active' : ''
            }`}
        >
            <img className="card__avatar" src={avatar} alt="avatar" />
            <div className="card__details">
                <span className="card__name">{name}</span>
                <span className="card__sub-details">
                    {title}, {`${properties} properties`}
                </span>
            </div>
        </div>
    );
};

export default Card;
