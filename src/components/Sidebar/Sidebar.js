import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import Button from '../Button/Button';
import './Sidebar.scss';
import AvatarOne from '../../assets/images/avatar1.svg';
import AvatarTwo from '../../assets/images/avatar2.svg';
import AvatarThree from '../../assets/images/avatar3.svg';

const Sidebar = ({ title, address, properties }) => {
    const [active, setActive] = useState(false);
    const [personId, setPersonId] = useState(null);
    const [people, setPeople] = useState([]);

    useEffect(() => {
        setPeople([
            {
                id: 0,
                name: 'Jane Bridges',
                title: 'Owner',
                properties: 3,
                avatar: AvatarTwo,
            },
            {
                id: 1,
                name: 'Michael Anderson',
                title: 'Owner',
                properties: 23,
                avatar: AvatarThree,
            },
            {
                id: 2,
                name: 'Sophia Ridenouer',
                title: 'Owner',
                properties: 41,
                avatar: AvatarOne,
            },
        ]);
    }, []);

    return (
        <div className="sidebar">
            <div className="sidebar__heading">
                <h3 className="sidebar__title">{title}</h3>
                <p className="sidebar__address">{address}</p>
                <span className="sidebar__properties">
                    {properties} Properties
                </span>
            </div>

            <div className="sidebar__header">
                
            </div>

            <div className="sidebar__card-wrapper">
                {people.map((person, i) => {
                    return (
                        <Card
                            setId={() => setPersonId(person.id)}
                            isActive={personId === i}
                            key={person.id}
                            name={person.name}
                            title={person.title}
                            properties={person.properties}
                            avatar={person.avatar}
                        />
                    );
                })}

                <Button text="Add" />
            </div>
        </div>
    );
};

export default Sidebar;
