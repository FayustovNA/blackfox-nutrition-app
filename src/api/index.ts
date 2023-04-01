import { TRegisterUserResponse } from '../services/slices/registerSlice'
import { getCookie } from '../utils/utils'
import { TUserRegister } from '../hooks/useForm'

export const API_URL: string = `http://localhost:8000/api`

const HEADERS: HeadersInit = {
  'Content-Type': 'application/json',
}
type HeadersInit = Headers | string[][] | { [key: string]: string }

export const checkResponse = <T>(res: Response): Promise<T> => {
  return res.ok ? res.json() : res.json().then(() => Promise.reject(res.status))
}

export const apiRequest = <T>(
  url: string,
  options: RequestInit
): Promise<T> => {
  return fetch(url, options).then((res) => checkResponse<T>(res))
}

export const registerUserRequestApi = ({
  email,
  password,
  firstName,
  lastName,
  organization,
}: TUserRegister) => {
  return apiRequest<TRegisterUserResponse>(`${API_URL}/register/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charger=utf-8',
    },
    body: JSON.stringify({
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      organization: organization,
    }),
  })
}
