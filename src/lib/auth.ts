import { User } from '@/@types/typeDecodeToken'
import Cookie from 'js-cookie'
import decode from 'jwt-decode'

export function getUser(): User {
  const token = Cookie.get('auth_token')
  console.log(token)
  if (!token) {
    throw new Error('Unauthenticated')
  }

  const user: User = decode(token)
  return user
}
