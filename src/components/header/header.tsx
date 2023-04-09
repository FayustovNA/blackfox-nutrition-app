import React from 'react';
import styles from './header.module.css';
import Logo from '../../images/Logo.svg';
import { ReactComponent as Progress } from '../../images/progress.svg';
import { ReactComponent as Profile } from '../../images/profile.svg';
import { NavLink, useMatch, Link } from 'react-router-dom';



function AppHeader() {



    return (
        <header className={styles.header}>
            <nav className={styles.navigation}>
                <NavLink to='progress' className={({ isActive }) => isActive ? styles.link_active : styles.link}><Progress className={styles.linkimg} />ПРОГРЕСС </NavLink>
                <img src={Logo} className={styles.logo}></img>
                <NavLink to='/' className={({ isActive }) => isActive ? styles.link_active : styles.link}><Profile className={styles.linkimg} />ПРОФИЛЬ</NavLink>
            </nav>
        </header >
    );
}

export default AppHeader;