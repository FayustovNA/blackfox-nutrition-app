import React, { FormEvent } from 'react'
import styles from './login.module.css'
import useForm from '../../hooks/useForm'
import { Link } from 'react-router-dom'
import { useDispatch } from '../../services/hooks'
import { loginUser } from '../../services/slices/userSlice'

const LogIn = () => {
  const { values, handleChange } = useForm({
    email: '',
    password: '',
  })
  const dispatch = useDispatch()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(loginUser(values))
  }

  return (
    <div className={styles.loginpage}>
      <h2 className={styles.title}>
        Пора зайти в личный кабинет и сдать отчет!
      </h2>
      <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
        <input
          className={styles.input}
          type='email'
          name='email'
          value={values.email}
          onChange={handleChange}
          required
        />

        <input
          className={styles.input}
          type='password'
          placeholder='Пароль'
          name='password'
          value={values.password}
          onChange={handleChange}
          required
        />

        <button type='submit' className={styles.btn}>
          Войти
        </button>
      </form>
      <p className={styles.text}>
        Вы — новый пользователь?
        <Link className={styles.link} to='/registration'>
          {' '}
          Зарегистрироваться
        </Link>
      </p>
      <p className={styles.text}>
        Забыли пароль?{' '}
        <Link className={styles.link} to='/forgot-password'>
          Восстановить
        </Link>{' '}
      </p>
    </div>
  )
}

export default LogIn
