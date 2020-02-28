import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer className="bck_red">
            <Fade delay={500}>
                <div className="font_righteous footer_logo_venue">The Venue</div>
                <div className="footer_copyright">
    <p> &copy;{new Date().getFullYear()} | Nagireddy | All rights reserved |Terms of services |Privacy.</p>
                </div>
            </Fade>
        </footer>
    );
};

export default Footer;