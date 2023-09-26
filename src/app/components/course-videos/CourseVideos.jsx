import ReactPlayer from "react-player";
import SinglePlayList from "../single-playlist/SinglePlayList";
import "./CourseVideos.css";

const CourseVideos = () => {
  return (
    <section className="course-videos">
      <iframe
        width="2000"
        height="500"
        src="https://www.youtube.com/embed/bshUryFYjKs?si=YC0ZxQMEeqfGlLkr"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div className="course-playlist">
        <p className="playlist-title">Course Playlists</p>
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
