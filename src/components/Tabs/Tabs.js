import React from 'react';

const Tabs = () => {
    return (
        <div className="tab">
            <div
                onClick={() => setActive(!active)}
                className={`tab__header-item ${
                    active ? 'tab__header-item--active' : ''
                }`}
            >
                My Profile
            </div>
        </div>
    );
};

export default Tabs;
