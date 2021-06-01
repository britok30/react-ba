import React, { useState, useEffect } from 'react';
import './App.scss';
import Profile from './components/Profile/Profile';
import MaleAvatar from './assets/images/male.svg';
import FemaleAvatar from './assets/images/female.svg';

function App() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        (async function loadPeople() {
            await setPeople([
                {
                    id: 0,
                    name: 'Jana Bridges',
                    email: 'j.bridges@example.com',
                    phone: '(281) 286-9741',
                    address: {
                        street: '1234 Main St.',
                        unit: 'Suite 560',
                        cityState: 'Houston, TX',
                        zip: 77001,
                    },
                    title: 'Owner',
                    properties: 3,
                    avatar: FemaleAvatar,
                },
                {
                    id: 1,
                    name: 'Michael Anderson',
                    email: 'm.anderson@example.com',
                    phone: '(972) 559-5899',
                    address: {
                        street: '1234 Church Ave',
                        unit: 'Suite 380',
                        cityState: 'Houston, TX',
                        zip: 77001,
                    },
                    title: 'Owner',
                    properties: 23,
                    avatar: MaleAvatar,
                },
                {
                    id: 2,
                    name: 'Sophia Ridenouer',
                    email: 's.ridenouer@example.com',
                    phone: '(281) 900-5467',
                    address: {
                        street: '1234 West Blvd',
                        unit: 'Suite 368',
                        cityState: 'Houston, TX',
                        zip: 77001,
                    },
                    title: 'Owner',
                    properties: 41,
                    avatar: FemaleAvatar,
                },
            ]);
        })();
    }, []);
    return (
        <div className="app">
            <Profile
                people={people}
                title="Propworx Property Management"
                address="1234 Main St., Suite 400, Houston TX 77001"
                properties="82"
            />
        </div>
    );
}

export default App;
