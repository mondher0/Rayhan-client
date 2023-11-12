import { cookies } from "next/headers";

// getting the token from cookie
export const getToken = () => {
  const token = cookies().get("token");
  return token.value;
};
