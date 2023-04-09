import React, { FormEvent, useState, useEffect, ChangeEvent, SyntheticEvent } from 'react';
import styles from './login.module.css';
import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';


const LogIn = () => {



    return (
        <div className={styles.loginpage}>
            <h2 className={styles.title}>
                Пора зайти в личный кабинет и сдать отчет!
            </h2>
            <form className={styles.form} >

                <input className={styles.input}
                    type="email"
                    placeholder="E-mail"
                    name='email'
                    required
                />

                <input className={styles.input}
                    type="password"
                    placeholder="Пароль"
                    name='password'
                    required />

                <button type='submit' className={styles.btn}>
                    Войти
                </button>
            </form>
            <p className={styles.text}>Вы — новый пользователь?<Link className={styles.link} to='/registration'>  Зарегистрироваться</Link></p>
            <p className={styles.text}>Забыли пароль? <Link className={styles.link} to='/forgot-password'>Восстановить</Link> </p>
        </div>
    );
}

export default LogIn;