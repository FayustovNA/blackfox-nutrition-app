import React from 'react';
import styles from './header.module.css';
import Logo from '../../images/Logo.svg';
import Progress from '../../images/progress.svg';
import Profile from '../../images/profile.svg';
import { NavLink, useMatch } from 'react-router-dom';


function AppHeader() {

    return (
        <header className={styles.header}>
            <nav className={styles.navigation}>
                <li className={styles.link}><img src={Progress} className={styles.linkimg}></img> ПРОГРЕСС </li>
                <img src={Logo} className={styles.logo}></img>
                <li className={styles.link}><img src={Profile} className={styles.linkimg}></img>ПРОФИЛЬ</li>
            </nav>

        </header >
    );
}

export default AppHeader;