import React from 'react';
import styles from '../styles/Navbar.module.css';
import logo from '../assets/logo.png';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <img src={logo} alt="logo" className={styles.navbarLogo} />
            </div>
            <div>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/services">Projects</a>
                <a href="/contact">Contact</a>
            </div>
        </div>
    )
};

export default Navbar;