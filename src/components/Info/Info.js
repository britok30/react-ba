import React from 'react';
import MailIcon from '../../assets/images/mail-icon.svg';
import PhoneIcon from '../../assets/images/phone-icon.svg';
import NavIcon from '../../assets/images/nav-icon.svg';
import './Info.scss';

const Info = ({ people, personId }) => {
    return (
        <div>
            <div className="info__container">
                <div className="info__email">
                    <span className="info__email-text">
                        {people[personId].email}
                    </span>
                    <img src={MailIcon} alt="mail-icon" />
                </div>
                <div className="info__phone">
                    <span className="info__phone-text">
                        {people[personId].phone}
                    </span>
                    <img src={PhoneIcon} alt="phone-icon" />
                </div>
                <div className="info__address">
                    <div className="info__address-wrapper">
                        <span className="info__address-text">
                            {people[personId].address.street}
                        </span>
                        <span className="info__address-text">
                            {people[personId].address.unit}
                        </span>
                        <span className="info__address-text">
                            {people[personId].address.cityState}
                        </span>
                    </div>
                    <img src={NavIcon} alt="nav-icon" />
                </div>
            </div>
        </div>
    );
};

export default Info;
