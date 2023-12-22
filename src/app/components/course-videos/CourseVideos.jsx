"use client";
import { useTranslations } from "next-intl";
import SinglePlayList from "../single-playlist/SinglePlayList";
import "./CourseVideos.css";
import ReactPlayer from "react-player";

const CourseVideos = ({
  title,
  course,
  independent,
  courseId,
  enrollment,
  categoryId,
  url,
}) => {
  const t = useTranslations("afterLogin");
  const { lessons } = course || {};

  // embed video url
  const embedUrl = url?.replace("watch", "embed");
  return (
    <section className="course-videos">
      <div className="ifram">
        <iframe
          title="naruto"
          src={url}
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
              categoryId={categoryId}
            />
          );
        })}
      </div>
    </section>
  );
};

export default CourseVideos;
