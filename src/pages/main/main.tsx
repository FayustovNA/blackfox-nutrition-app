import React, { FormEvent, useState, useEffect, ChangeEvent, SyntheticEvent } from 'react';
import styles from './main.module.css';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import LogIn from '../../images/LogIn.png';
import RegIn from '../../images/Registr.png';


const MainPage = () => {

    return (
        <div className={styles.mainpage}>
            <div className={styles.text}>
                <p className={styles.title}>
                    blackfox nutrition
                </p>
                <p className={styles.subtitle} > - платформа, где точно получится прийти к сбалансированному рациону и  достигнуть цели!</p>
            </div>

            <div className={styles.grid}>
                <div className={styles.box}>
                    <img src={RegIn} className={styles.img}></img>
                    <NavLink to='registration'>
                        <button type='submit' className={styles.btn}>
                            ЗАРЕГИСТРИРОВАТЬСЯ
                        </button>
                    </NavLink>
                </div>

                <div className={styles.box}>
                    <img src={LogIn} className={styles.img2}></img>
                    <NavLink to='login'>
                        <button type='submit' className={styles.btn}>
                            ВОЙТИ В ПРОФИЛЬ
                        </button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default MainPage;