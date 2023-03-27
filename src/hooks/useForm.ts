import React, { ChangeEvent, useState } from 'react'

export type TUserRegister = {
  firstName?: string
  lastName?: string
  email: string
  password: string
  organization?: string
}

const useForm = (inputValues: TUserRegister) => {
  const [values, setValues] = useState(inputValues)

  const handleChange = (
    event: ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { value, name } = event.target
    setValues({ ...values, [name]: value })
  }

  return { values, handleChange, setValues }
}

export default useForm
