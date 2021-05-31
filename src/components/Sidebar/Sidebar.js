import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import Tabs from '../Tabs/Tabs';
import Button from '../Button/Button';
import './Sidebar.scss';
import AvatarOne from '../../assets/images/avatar1.svg';
import AvatarTwo from '../../assets/images/avatar2.svg';
import AvatarThree from '../../assets/images/avatar3.svg';

const Sidebar = ({ title, address, properties }) => {
    const [personId, setPersonId] = useState(0);
    const [tabId, setTabId] = useState(1);
    const [people, setPeople] = useState([]);
    const [tabs, setTabs] = useState([]);

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

        setTabs([
            {
                id: 0,
                label: 'My Profile',
            },
            {
                id: 1,
                label: 'Owners',
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
            <div className="sidebar__tabs-wrapper">
                {tabs.map((tab, i) => {
                    return (
                        <Tabs
                            key={tab.id}
                            label={tab.label}
                            isActive={tabId === i}
                            setId={() => setTabId(tab.id)}
                        />
                    );
                })}
            </div>
            <div className="sidebar__card-wrapper">
                {tabId === 0 ? (
                    <div
                        style={{
                            height: '22vh',
                            display: 'flex',
                            alignItems: 'center',
                            fontSize: '24px',
                        }}
                    >
                        My Profile
                    </div>
                ) : (
                    people.map((person, i) => {
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
                    })
                )}
                {tabId === 1 ? <Button text="Add" /> : null}
            </div>
        </div>
    );
};

export default Sidebar;
