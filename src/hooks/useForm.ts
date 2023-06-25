import {ChangeEvent, useState} from 'react'

export type TUserRegister = {
  username: string
  email: string
  password: string
  confirmPassword: string
}

const useForm = (inputValues: TUserRegister) => {
  const [values, setValues] = useState(inputValues)

  const handleChange = (
    event: ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const {value, name} = event.target
    setValues({...values, [name]: value})
  }

  return {values, handleChange, setValues}
}

export default useForm
