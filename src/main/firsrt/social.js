import React from 'react';
import whatsapp from '../../images/whatsapp.png';
import './social.css';
import Link from "@material-ui/core/Link";

const Social = () => {
    return (
        <div className='social'>
            <div className='wa'>
                <a href="http://whatsapp.com" target='_blank'><img src={whatsapp} alt=""/></a>
            </div>
            <div className='wa'>
                <a href="http://whatsapp.com" target='_blank'><img src='https://img.icons8.com/ios/452/instagram-new--v1.png' alt=""/></a>
            </div>
        </div>
    );
};

export default Social;