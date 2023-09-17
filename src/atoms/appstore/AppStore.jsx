import Image from "next/image";
import appStorebtn from "./btn-appstore.svg";
import "./AppStore.css";

const AppStore = () => {
  return (
    <Image
      src={appStorebtn}
      alt="appstore-btn"
      width={200}
      height={60}
      className="appstore-btn"
    />
  );
};

export default AppStore;
