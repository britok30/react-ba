import React, { useState, useEffect } from 'react';
import './App.scss';
import Profile from './components/Profile/Profile';
import AvatarOne from './assets/images/avatar1.svg';
import AvatarTwo from './assets/images/avatar2.svg';
import AvatarThree from './assets/images/avatar3.svg';

function App() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        (async function loadPeople() {
            await setPeople([
                {
                    id: 0,
                    name: 'Jana Bridges',
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
