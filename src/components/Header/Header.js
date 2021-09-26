import React from 'react';
import logo from '../../img/choosing.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className='header-container'>
                <div className='logo-container'>
                    <img src={logo} alt="" />
                    <h2> 𝐸𝒶𝓈𝓎 𝒮𝑒𝓁𝑒𝒸𝓉 </h2>
                </div>
                <div>
                    <nav>
                        <a href="/">Home</a>
                        <a href="/">More</a>
                        <a href="/">Contact Us</a>
                        <a href="/">About Us</a>
                    </nav>           
                </div>                   
            </div>
            <div className='header-text'>
                <h2>Make a Cyber Team</h2>
                <p className='text-muted'>To get something you never had,you have to do something you naver did.</p>
                <h6>Total Budget: 500 Million</h6>
            </div>
        </div>
    );
};

export default Header;