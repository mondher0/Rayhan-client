import Image from "next/image";
import playStoreBtn from "./btn-playstore.svg";
import "./PlayStore.css";

const PlayStore = () => {
  return (
    <Image
      src={playStoreBtn}
      alt="playstore-btn"
      width={200}
      height={60}
      className="playstore-btn"
    />
  );
};

export default PlayStore;
