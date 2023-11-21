import { useTranslations } from "next-intl";
import SinglePlayList from "../single-playlist/SinglePlayList";
import "./CourseVideos.css";

const CourseVideos = ({ title, course, independent, courseId, enrollment }) => {
  const t = useTranslations("afterLogin");
  const { lessons } = course || {};
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
        {lessons?.map((lesson) => {
          return (
            <SinglePlayList
              lesson={lesson}
              independent={independent}
              courseId={courseId}
              enrollment={enrollment}
            />
          );
        })}
      </div>
    </section>
  );
};

export default CourseVideos;
