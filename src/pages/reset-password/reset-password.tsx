import React, { FormEvent, useState, useEffect, ChangeEvent, SyntheticEvent } from 'react';
import styles from './reset-password.module.css';
import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';


const ResetPassword = () => {



    return (
        <div className={styles.loginpage}>
            <h2 className={styles.title}>
                Восстановление пароля
            </h2>
            <form className={styles.form} >

                <input className={styles.input}
                    type="password"
                    placeholder="Введите новый пароль"
                    name='password'
                    required />

                <input className={styles.input}
                    placeholder="Введите код из письма"
                    name='reset-code'
                    required
                />


                <button type='submit' className={styles.btn}>
                    Сохранить
                </button>
            </form>
            <p className={styles.text}>Вспомнили пароль? <Link className={styles.link} to='/login'>Войти</Link> </p>
        </div>
    );
}

export default ResetPassword;