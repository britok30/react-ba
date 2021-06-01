import React from 'react';
import Info from '../Info/Info';
import PencilIcon from '../../assets/images/pencil-icon.svg';
import ChatIcon from '../../assets/images/chat-icon.svg';
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
                        <div className="main__details">
                            <span className="main__name">
                                {people[personId].name}
                            </span>
                            <span className="main__title">
                                {people[personId].title}
                            </span>
                        </div>
                        <div className="main__options">
                            <div className="main__edit">
                                <span className="main__edit-text">Edit</span>
                                <img src={PencilIcon} alt="pencil-icon" />
                            </div>
                            <div className="main__chat">
                                <span className="main__chat-text">Chat</span>
                                <img src={ChatIcon} alt="chat-icon" />
                            </div>
                        </div>
                        <div className="main__info">
                            <Info people={people} personId={personId} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Main;
