import React, { FormEvent, useState, useEffect, ChangeEvent, SyntheticEvent } from 'react';
import styles from './registration.module.css';
import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';


const Registration = () => {



    return (
        <div className={styles.loginpage}>
            <h2 className={styles.title}>
                Привет!
                <span>
                    Пора сделать первый шаг к своей цели!
                </span>
            </h2>
            <form className={styles.form} >

                <input className={styles.input}
                    placeholder='Николай Фаюстов'
                    name='name'
                    required
                />

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
                    Зарегистрироваться
                </button>
            </form>
            <p className={styles.text}>Уже зарегистрированы? <Link className={styles.link} to='/login'>Войти</Link> </p>
        </div>
    );
}

export default Registration;