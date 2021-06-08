import React from 'react';
import wa from './../images/whatsapp.png';
import './socialIcons.css';

const SocialIcons = () => {
    return (
        <div className='socialIcons'>
            <div className='icons'>
                <div><img src={wa} alt=""/></div>
                <div><img src={wa} alt=""/></div>
                <div><img src={wa} alt=""/></div>
            </div>
            <div className='icons'>
                <div><img src={wa} alt=""/></div>
                <div><img src={wa} alt=""/></div>
                <div><img src={wa} alt=""/></div>
            </div>
        </div>
    );
};

export default SocialIcons;