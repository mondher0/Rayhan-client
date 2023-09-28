import { useTranslations } from "next-intl";
import SinglePlayList from "../single-playlist/SinglePlayList";
import "./CourseVideos.css";

const CourseVideos = () => {
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
        <p className="ifram-title">
          Maths - for Standard 3 Students | Episode 2
        </p>
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
