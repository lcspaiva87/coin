import axios from 'axios';


import invariant from 'tiny-invariant';

invariant(
  process.env.NEXT_PUBLIC_REST_API_ENDPOINT,
  'NEXT_PUBLIC_REST_API_ENDPOINT is not defined, please define it in your .env file',
)
async function request<T>(method: 'get' | 'post' | 'put', path: string, data?: unknown, token?: string) {
  const config = token ? {
    headers: {
      Authorization:`Bearer ${token}`,
    },
  } : {};

  const response = await axios({
    method,
    url: process.env.NEXT_PUBLIC_REST_API_ENDPOINT + path,
    data,
    ...config,
  });

  return response.data;
 }

export async function get<T>(path: string, token?: string) {
  return request<T>('get', path, undefined, token);
 }

export async function post<T>(path: string, data: unknown, token?: string) {
  return request<T>('post', path, data, token);
 }

export async function put<T>(path: string, data: unknown, token?: string) {
  return request<T>('put', path, data, token);
 }
