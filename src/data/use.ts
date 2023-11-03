import axios from "axios";

export const fetchLogin= async ({email,passoword}:{email:string, passoword:string}) => {
  const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/user/login`,{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({email,passoword}),
  });
  const data = await response.data;
  return data;
};