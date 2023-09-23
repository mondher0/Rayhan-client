import Image from "next/image";
import LoginWithGoogleIcon from "./login-with-google.svg";

const LoginWithGoogle = () => {
  return (
    <Image
      src={LoginWithGoogleIcon}
      alt="login with google"
      width={90}
      height={100}
    />
  );
};

export default LoginWithGoogle;
