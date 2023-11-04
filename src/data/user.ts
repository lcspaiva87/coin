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
  const response = await post<AuthToken>('/user/register',{
  email,password,name,  terms
  });

  return  response;

};
