import Image from "next/image";
import "./SinglePlayList.css";
import { useTranslations } from "next-intl";

const SinglePlayList = () => {
  const t = useTranslations("afterLogin");
  return (
    <>
      <div className="single-playlist">
        <Image
          src="/images/play-list-image.png"
          alt="play-list-image"
          width={200}
          height={100}
        />
        <div className="details">
          <p className="title">Maths - Introduction</p>
          <p className="duration">1:57</p>
        </div>
      </div>
      <button className="playlist-btn">{t("rewatchBtn")}</button>
    </>
  );
};

export default SinglePlayList;
