import { useTranslations } from "next-intl";
import SinglePlayList from "../single-playlist/SinglePlayList";
import "./CourseVideos.css";

const CourseVideos = ({ title }) => {
  const t = useTranslations("afterLogin");
  return (
    <section className="course-videos">
      <div className="ifram">
        <iframe
          title="naruto"
          src="https://www.youtube.com/embed/QhBnZ6NPOY0"
          allowFullScreen
          width={1000}
          height={500}
        ></iframe>
        <p className="ifram-title">{title}</p>
      </div>

      <div className="course-playlist">
        <p className="playlist-title">{t("coursePlayList")}</p>
        <SinglePlayList />
        <SinglePlayList />
        <SinglePlayList />
        <SinglePlayList />
        <SinglePlayList />
        <SinglePlayList />
      </div>
    </section>
  );
};

export default CourseVideos;
