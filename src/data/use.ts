import axios from "axios";
import { post } from "./client/http-client";


interface User {
  email:string,
  password:string
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
export const fetchLogin= async ({email,password}:User) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks

  const response = await post<AuthToken>('/user/login',{
  email,password
  });

  return  response;

};

export const fetchRegister= async ({email,name,password,terms}:RegisterInput) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks

  const response = await axios.post<AuthToken>(`${process.env.NEXT_PUBLIC_REST_API_ENDPOINT}/user/login`,{
  email,password,name,  terms
  });

  return  response;

};
