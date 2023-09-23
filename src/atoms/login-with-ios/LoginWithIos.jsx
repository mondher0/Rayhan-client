import Image from "next/image";
import loginWithIosIcon from "./login-with-ios.svg";

const LoginWithIos = () => {
  return (
    <Image
      src={loginWithIosIcon}
      alt="login with ios"
      width={90}
      height={100}
    />
  );
};

export default LoginWithIos;
