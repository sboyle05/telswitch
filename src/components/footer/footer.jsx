import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footerContainer bg-blue text-white pt-5 pb-3 bottom-0 w-full">
            <div className="linkContainer mx-auto px-4 flex justify-between items-center">
                {/* Remove the div with className 'footerLink' */}
                <Link to="/about" className="footerLink hover:underline">
                    About Us
                </Link>
                <Link to="/contact" className="footerLink hover:underline">
                    Contact Us
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
