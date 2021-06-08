import React from 'react';
import Container from "@material-ui/core/Container";
import Numbers from "./numbers";
import SocialIcons from "./socialIcons";
import './footer.css';

const Footer = () => {
    return (
        <div className='back'>
            <Container>
                <div className='footer'>
                    <Numbers/>
                    <SocialIcons/>
                </div>
            </Container>
        </div>
    );
};

export default Footer;