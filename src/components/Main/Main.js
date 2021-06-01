import React from 'react';
import './Main.scss';

const Main = ({ people, personId }) => {
    return (
        <div>
            <div className="main__container">
                {people.length && (
                    <div className="main__header">
                        <img
                            className="main__avatar"
                            src={people[personId].avatar}
                            alt="avatar"
                        />
                        <div className="main__text">
                            <span className="main__name">
                                {people[personId].name}
                            </span>
                            <span className="main__title">
                                {people[personId].title}
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Main;
