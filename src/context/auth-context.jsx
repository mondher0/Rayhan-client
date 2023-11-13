"use client";
import { baseUrl } from "@/utils/constants";
import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { deleteCookie, getCookie, setCookie } from "cookies-next";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [tempCode, setTempCode] = useState(null);
  const router = useRouter();
  const [firstCode, setFirstCode] = useState("");
  const [secondCode, setSecondCode] = useState("");
  const [thirdCode, setThirdCode] = useState("");
  const [fourthCode, setFourthCode] = useState("");
  const [fifthCode, setFifthCode] = useState("");

  // verify  referal code
  const verifyReferalCode = async (e) => {
    e.preventDefault();
    console.log("--------------user from verify referal code", user);
    const data = {
      referral: user.referralCode, //required
    };
    try {
      setIsLoading(true);
      const response = await axios.post(
        `${baseUrl}/auth/student/check_referral`,
        data
      );
      console.log("--------------response from verify referal code", response);
      setIsLoading(false);
      router.push("/register/register-procces");
    } catch (error) {
      setIsLoading(false);
      toast.error(error.response.data.message);
      console.log("--------------error from verify referal code", error);
    }
  };

  // get temp code
  const getTempCode = async () => {
    try {
      setIsLoading(true);
      const resp = await axios.post(
        `${baseUrl}/auth/student/phone_verification`,
        {
          phone: user.phoneNumber,
        }
      );
      console.log("--------------response from get temp code", resp);
      const response = await axios.get(
        `${baseUrl}/get_code_test?phone=${user.phoneNumber}`
      );
      console.log("--------------response from get temp code", response);
      setIsLoading(false);
      router.push("/register/account-verification");
    } catch (error) {
      setIsLoading(false);
      toast.error(error.response.data.errors.phone[0]);
      console.log("--------------error from get temp code", error);
    }
  };

  // confirm phone number
  const confirmPhoneNumber = async () => {
    console.log(user);
    console.log(firstCode + secondCode + thirdCode + fourthCode + fifthCode);
    const data = {
      phone: user.phoneNumber, //required
      code: firstCode + secondCode + thirdCode + fourthCode + fifthCode, //required
    };
    console.log(data);
    setIsLoading(true);
    try {
      const response = await axios.post(
        `${baseUrl}/auth/student/check_code`,
        data
      );
      console.log("--------------response from confirm phone number", response);
      setIsLoading(false);
      router.push("/register/register-procces");
    } catch (error) {
      setIsLoading(false);
      console.log("--------------error from confirm phone number", error);
      toast.error(
        error.response.data.errors.code[0]
          ? error.response.data.errors.code[0]
          : error.response.data.message
      );
    }
  };

  // handle register
  const handleRegister = (e) => {
    e.preventDefault();
    console.log(user);
  };

  // handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const data = {
        phone: user.phoneNumber, //required
        password: user.password, //required
      };
      const response = await axios.post(`${baseUrl}/auth/student/login`, data);
      console.log("--------------response from handle login", response);
      setCookie("token", response.data.data.token);
      console.log(getCookie("token"));
      setIsLoading(false);
      router.push("/home");
    } catch (error) {
      setIsLoading(false);
      toast.error(
        error.response.data.message !== "undifined"
          ? error.response.data.message
          : "something went wrong"
      );
      console.log("--------------error from handle login", error);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        handleRegister,
        verifyReferalCode,
        isLoading,
        setIsLoading,
        getTempCode,
        confirmPhoneNumber,
        handleLogin,
        firstCode,
        setFirstCode,
        secondCode,
        setSecondCode,
        thirdCode,
        setThirdCode,
        fourthCode,
        setFourthCode,
        fifthCode,
        setFifthCode,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
