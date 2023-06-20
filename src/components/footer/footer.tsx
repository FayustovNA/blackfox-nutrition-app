import React from 'react';
import styles from './footer.module.css';
import { NavLink, useMatch, Link } from 'react-router-dom';



function AppFooter() {



    return (
        <footer className={styles.footer}>
            <nav className={styles.navigation}>
                <ul className={styles.links}>
                    <p className={styles.title}>Что-то о нас</p>
                    <li className={styles.link}>blackfoxnutrition@gmail.com</li>
                </ul>
                <ul className={styles.links}>
                    <p className={styles.title}>Что-то важное</p>
                    <li className={styles.link}>Оферта</li>
                    <li className={styles.link}>Политика конфиденциальности</li>
                    <li className={styles.link}>Обратная связь</li>
                </ul>
                <ul className={styles.links}>
                    <p className={styles.title}>Что-то про социальные сети</p>
                    <li className={styles.link}>Telegram</li>
                    <li className={styles.link}>Instagram*</li>
                    <li className={styles.link}>VK</li>
                </ul>
            </nav>
        </footer >
    );
}

export default AppFooter;