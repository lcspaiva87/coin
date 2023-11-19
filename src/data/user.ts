import Cookie from 'js-cookie'

import { parseCookies } from 'nookies'
import { get, post } from './client/http-client'

interface User {
  email: string
  password: string
}
type AuthToken = {
  token: string
}
interface RegisterInput {
  name: string
  email: string
  password: string
  terms: boolean
}
interface typeAddCrypton {
  name: string
  icon: string
  priceUsd: number
  percentage: number
  userId: string
  amount: number
  acronym: string
}
type typeTrade = {
  userId: string
  idCoin: string
  amount: number
  nameCoin: string
  type_trade: string
}

export const fetchLogin = async ({ email, password }: User) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const response = await post<AuthToken>('/user/login', {
    email,
    password,
  })
  return response
}

export const fetchRegister = async ({
  email,
  name,
  password,
  terms,
}: RegisterInput) => {
  const response = await post<AuthToken>('/user/register', {
    email,
    password,
    name,
    terms,
  })
  return response
}

export const fetchCreateOrder = async ({
  acronym,
  amount,
  icon,
  name,
  percentage,
  priceUsd,
  userId,
}: typeAddCrypton) => {
  const token = Cookie.get('auth_token')

  const response = await post(
    '/coin/register',
    {
      acronym,
      amount,
      icon,
      name,
      percentage,
      priceUsd,
      userId,
    },
    token,
  )
  return response
}

export const fetListOrder = async () => {
  const { auth_token: token } = parseCookies()
  const response = await get('/coin', token)
  return response
}

export const fetTradeOrder = async ({
  amount,
  idCoin,
  nameCoin,
  // eslint-disable-next-line camelcase
  type_trade,
  userId,
}: typeTrade) => {
  const { auth_token: token } = parseCookies()
  const response = await post(
    '/coin/trade',
    // eslint-disable-next-line camelcase
    { amount, idCoin, nameCoin, type_trade, userId },
    token,
  )
  return response
}
