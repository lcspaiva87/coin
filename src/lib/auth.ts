import { User } from '@/@types/typeDecodeToken'
import decode from 'jwt-decode'
import { parseCookies } from 'nookies'

export function getUser(): User {
  const{'auth_token':token} = parseCookies()
  if (!token) {
    throw new Error('Unauthenticated')
  }

  const user: User = decode(token)
  return user
}
