import decode from 'jwt-decode'
import { cookies } from 'next/headers'
interface User {
  userId: string
  name: string
  avatarUrl: string
}

export function getUser(): User {
  const token = cookies().get('auth_token')?.value
  if (!token) {
    throw new Error('Unauthenticated')
  }

  const user: User = decode(token)
  return user
}
