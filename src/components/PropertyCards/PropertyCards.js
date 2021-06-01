import React from 'react';
import './PropertyCards.scss';
import Chevron from '../../assets/images/chevron.svg';

const PropertyCards = ({ property }) => {
    return (
        <div className="property-card">
            <div className="property-card__container">
                <img
                    className="property-card__image"
                    src={property.image}
                    alt="property"
                />
                <img
                    className="property-card__status"
                    src={property.status}
                    alt="status"
                />
                <div className="property-card__inner-container">
                    <div className="property-card__details">
                        <span className="property-card__name">
                            {property.name}
                        </span>
                        <div className="property-card__address">
                            <span className="property-card__address-text">
                                {property.address.street}
                            </span>
                            <span className="property-card__address-text">
                                {property.address.cityState}{' '}
                                {property.address.zip}
                            </span>
                        </div>
                    </div>
                    <img
                        className="property-card__chevron"
                        src={Chevron}
                        alt="chevron"
                    />
                </div>
            </div>
        </div>
    );
};

export default PropertyCards;
