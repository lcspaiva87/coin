import axios from "axios";


interface User {
  email:string, 
  password:string
}
type AuthToken = {
  token: string
}
export const fetchLogin= async ({email,password}:User) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  
  const response = await axios.post<AuthToken>(`${process.env.NEXT_PUBLIC_REST_API_ENDPOINT}/user/login`,{
  email,password
  });

  return await response.data;

};