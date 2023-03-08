import React from 'react';
import styles from './header.module.css';
import Logo from '../../images/Logo.svg';
import { ReactComponent as Progress } from '../../images/progress.svg';
import { ReactComponent as Profile } from '../../images/profile.svg';
import { NavLink, useMatch } from 'react-router-dom';


function AppHeader() {

    return (
        <header className={styles.header}>
            <nav className={styles.navigation}>
                <li className={styles.link}><Progress className={styles.linkimg} />ПРОГРЕСС </li>
                <img src={Logo} className={styles.logo}></img>
                <li className={styles.link}><Profile className={styles.linkimg} />ПРОФИЛЬ</li>
            </nav>
        </header >
    );
}

export default AppHeader;