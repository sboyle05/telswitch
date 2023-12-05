import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'; // Make sure your CSS file path is correct

const Footer = () => {
    return (
        <footer className="footerContainer bg-blue text-white pt-5 pb-3 bottom-0 w-full">
            <div className="linkContainer mx-auto px-4 flex justify-between items-center">
                <div className='footerLink'>
                    <Link to="/about" className="footerLink hover:underline">
                        About Us
                    </Link>
                </div>
                <div className='footerLink'>
                <Link to="/contact" className="footerLink hover:underline">
                        Contact Us
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
