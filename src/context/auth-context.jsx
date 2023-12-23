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
  const [schoolType, setSchoolType] = useState("");

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
        data,
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
        },
      );
      console.log("--------------response from get temp code", resp);
      const response = await axios.get(
        `${baseUrl}/get_code_test?phone=${user.phoneNumber}`,
      );
      console.log("--------------response from get temp code", response);
      setFirstCode(response.data.code[0]);
      setSecondCode(response.data.code[1]);
      setThirdCode(response.data.code[2]);
      setFourthCode(response.data.code[3]);
      setFifthCode(response.data.code[4]);
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
        data,
      );
      console.log("--------------response from confirm phone number", response);
      setIsLoading(false);
      router.push("/register/register-procces");
    } catch (error) {
      setIsLoading(false);
      console.log("--------------error from confirm phone number", error);
      toast.error("Something went wrong");
    }
  };

  // handle register
  const handleRegister = async (study_year) => {
    try {
      setIsLoading(true);
      const data = {
        first_name: user.firstName,
        last_name: user.lastName,
        phone: user.phoneNumber,
        password: user.password,
        phone_verification_code: user.code,
        study_year: study_year,
      };
      const response = await axios.post(`${baseUrl}/auth/student/store`, data);
      console.log("--------------response from handle register", response);
      setIsLoading(false);
      router.push("/login");
    } catch (error) {
      setIsLoading(false);
      toast.error("something went wrong");
      console.log("--------------error from handle register", error);
    }
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
          : "something went wrong",
      );
      console.log("--------------error from handle login", error);
    }
  };

  //  handle forgot password
  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const data = {
        phone: user.phoneNumber, //required
      };
      const response = await axios.post(
        `${baseUrl}/auth/student/forgot_password`,
        data,
      );
      console.log(
        "--------------response from handle forgot password",
        response,
      );
      setTempCode(response.data.data.code);
      setIsLoading(false);
      getTempCodeReset();
      router.push("/login/enter-code");
    } catch (error) {
      setIsLoading(false);
      toast.error(
        error.response.data.message !== "undifined"
          ? error.response.data.message
          : "something went wrong",
      );
      console.log("--------------error from handle forgot password", error);
    }
  };

  // get temp code
  const getTempCodeReset = async () => {
    try {
      setIsLoading(true);
      console.log("--------------user from get temp code", user);
      const response = await axios.get(
        `${baseUrl}/get_code_test?phone=${user.phoneNumber}`,
      );
      console.log("--------------response from get temp code", response);
      setUser({
        ...user,
        code: response.data.code,
      });
      setFirstCode(response.data.code[0]);
      setSecondCode(response.data.code[1]);
      setThirdCode(response.data.code[2]);
      setFourthCode(response.data.code[3]);
      setFifthCode(response.data.code[4]);
      setIsLoading(false);
      // router.push("/register/account-verification");
    } catch (error) {
      setIsLoading(false);
      toast.error("something went wrong");
      console.log("--------------error from get temp code", error);
    }
  };

  // check code
  const checkCode = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const data = {
        phone: user.phoneNumber, //required
        code: user.code, //required
      };
      const response = await axios.post(
        `${baseUrl}/auth/student/check_code`,
        data,
      );
      console.log("--------------response from check code", response);
      setIsLoading(false);
      router.push("/login/change-password");
    } catch (error) {
      setIsLoading(false);
      toast.error("something went wrong");
      console.log("--------------error from check code", error);
    }
  };

  // reset password
  const resetPassword = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const data = {
        phone: user.phoneNumber, //required
        code: user.code, //required
        password: user.password, //required
        password_confirmation: user.password_confirmation, //required
      };
      const response = await axios.post(
        `${baseUrl}/auth/student/reset_password`,
        data,
      );
      console.log("--------------response from reset password", response);
      setIsLoading(false);
      toast.success("password changed successfully");
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (error) {
      setIsLoading(false);
      toast.error("something went wrong");
      console.log("--------------error from reset password", error);
    }
  };

  // handle logout
  const handleLogout = () => {
    router.push("/login");
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
        setSchoolType,
        schoolType,
        handleLogout,
        handleForgotPassword,
        checkCode,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
