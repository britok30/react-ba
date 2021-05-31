import React from 'react';
import './Tabs.scss';

const Tabs = ({ label, setId, isActive }) => {
    return (
        <div className="tabs">
            <div
                onClick={() => setId()}
                className={`tabs__item ${isActive ? 'tabs__item--active' : ''}`}
            >
                {label}
            </div>
        </div>
    );
};

export default Tabs;
