import React, { useState, useEffect } from 'react';
import './Properties.scss';
import Interior from '../../assets/images/interior.svg';
import PropertyCards from '../PropertyCards/PropertyCards';

const Properties = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        (async function loadPeople() {
            await setProperties([
                {
                    id: 0,
                    image: Interior,
                    name: 'Tacoma Estates Home',
                    address: {
                        street: '4 N Forest Beach Dr',
                        cityState: 'Beaufort, SC',
                        zip: 29928,
                    },
                },
                {
                    id: 1,
                    image: Interior,
                    name: 'Tacoma Estates Home',
                    address: {
                        street: '4 N Forest Beach Dr',
                        cityState: 'Beaufort, SC',
                        zip: 29928,
                    },
                },
                {
                    id: 2,
                    image: Interior,
                    name: 'Tacoma Estates Home',
                    address: {
                        street: '4 N Forest Beach Dr',
                        cityState: 'Beaufort, SC',
                        zip: 29928,
                    },
                },
            ]);
        })();
    }, []);

    return (
        <div className="properties">
            <div className="properties__container">
                <div className="properties__header">
                    <span className="properties__header-text">
                        Properties Assigned
                    </span>
                    <span className="properties__header-text properties__header-text--edit">
                        Edit
                    </span>
                </div>
                {properties.map((property) => (
                    <PropertyCards key={property.id} property={property} />
                ))}
            </div>
        </div>
    );
};

export default Properties;
