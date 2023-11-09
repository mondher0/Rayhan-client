"use client";
import { AuthContext } from "@/context/auth-context";
import { useContext } from "react";
const useAuthContext = () => {
  return useContext(AuthContext);
};
export default useAuthContext;
