import React, { useState, useEffect } from 'react';
import './Properties.scss';
import Interior from '../../assets/images/interior.svg';
import PropertyCard from './PropertyCard';

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
    });

    return <div>Properties</div>;
};

export default Properties;
