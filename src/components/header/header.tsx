import React from 'react';
import styles from './header.module.css';
import Logo from '../../images/Logo-Long.svg';
import { ReactComponent as Progress } from '../../images/progress.svg';
import { ReactComponent as Profile } from '../../images/profile.svg';
import { NavLink, useMatch, Link } from 'react-router-dom';



function AppHeader() {

    const isProfile = useMatch({ path: '/profile' })
    const isProgress = useMatch({ path: '/progress' })


    return (
        <header className={styles.header}>
            <nav className={styles.navigation}>
                {isProfile || isProgress ? <NavLink to='progress' className={({ isActive }) => isActive ? styles.link_active : styles.link}><Progress className={styles.linkimg} />ПРОГРЕСС </NavLink> : null}
                <NavLink to='/'>  <img src={Logo} className={styles.logo}></img> </NavLink>
                {isProfile || isProgress ? <NavLink to='profile' className={({ isActive }) => isActive ? styles.link_active : styles.link}><Profile className={styles.linkimg} />ПРОФИЛЬ</NavLink> : null}
            </nav>
        </header >
    );
}

export default AppHeader;