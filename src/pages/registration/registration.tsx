import React, { FormEvent } from 'react'
import styles from './registration.module.css'
import { Link } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from '../../services/hooks'
import { registerUser } from '../../services/slices/registerSlice'

const Registration = () => {
  const {values, handleChange} = useForm({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const checkSignUpValidity = (): boolean => {
    return (
      !!values.email &&
      !!values.username &&
      !!values.password &&
      !!values.confirmPassword
    )
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (checkSignUpValidity()) {
      dispatch(registerUser(values))
      navigate('/login')
    } else {
      console.error('Нужно заполнить все данные')
    }
  }

  return (
    <div className={styles.loginpage}>
      <h2 className={styles.title}>
        Привет!
        <span>Пора сделать первый шаг к своей цели!</span>
      </h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          placeholder='Имя пользователя'
          name='username'
          value={values.username}
          onChange={handleChange}
          required
        />
        <input
          className={styles.input}
          type='email'
          placeholder='E-mail'
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
        <input
          className={styles.input}
          type='password'
          placeholder='Повторите пароль'
          name='confirmPassword'
          value={values.confirmPassword}
          onChange={handleChange}
          required
        />
        <button type='submit' className={styles.btn}>
          Зарегистрироваться
        </button>
      </form>
      <p className={styles.text}>
        Уже зарегистрированы?{' '}
        <Link className={styles.link} to='/login'>
          Войти
        </Link>{' '}
      </p>
    </div>
  )
}

export default Registration
