import React, { FormEvent, useState, useEffect, ChangeEvent, SyntheticEvent } from 'react';
import styles from './forgot-password.module.css';
import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';


const ForgotPassword = () => {



    return (
        <div className={styles.loginpage}>
            <h2 className={styles.title}>
                Восстановление пароля
            </h2>
            <form className={styles.form} >

                <input className={styles.input}
                    type="email"
                    placeholder="Укажите e-mail"
                    name='email'
                    required
                />

                <button type='submit' className={styles.btn}>
                    Восстановить
                </button>
            </form>
            <p className={styles.text}>Вспомнили пароль? <Link className={styles.link} to='/login'>Войти</Link> </p>
        </div>
    );
}

export default ForgotPassword;