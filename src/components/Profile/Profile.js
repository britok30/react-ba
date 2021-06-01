import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import Main from '../Main/Main';
import Tabs from '../Tabs/Tabs';
import Button from '../Button/Button';
import './Profile.scss';

const Profile = ({ title, address, properties, people }) => {
    const [personId, setPersonId] = useState(0);
    const [tabId, setTabId] = useState(1);
    const [tabs, setTabs] = useState([]);

    useEffect(() => {
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
        <div className="profile">
            <div className="profile__side">
                <div className="profile__heading">
                    <h3 className="profile__title">{title}</h3>
                    <p className="profile__address">{address}</p>
                    <span className="profile__properties">
                        {properties} Properties
                    </span>
                </div>
                <div className="profile__tabs-wrapper">
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
                <div className="profile__card-wrapper">
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
            <div className="profile__main">
                <Main people={people} personId={personId} />
            </div>
        </div>
    );
};

export default Profile;
