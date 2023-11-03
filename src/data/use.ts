import axios from "axios";
interface User {
  email:string, 
  password:string
}
export const fetchLogin= async ({email,password}:User) => {
  const response = await axios.post(`${process.env.NEXT_PUBLIC_REST_API_ENDPOINT}/user/login`,{
  email,password
  });
  const data = await response.data;
  return data;
};