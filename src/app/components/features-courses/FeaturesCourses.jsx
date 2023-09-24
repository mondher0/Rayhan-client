"use client";
import { useState } from "react";
import "../../[locale]/home/home.css";
import SearchInput from "../search-input/SearchInput";
import CourseCard from "../course-card/CourseCard";

const FeaturesCourses = () => {
  const [recordeedClasses, setRecordedClasses] = useState(false);
  const [rooms, setRooms] = useState(false);
  const [recordedLives, setRecordedLives] = useState(false);
  const [toggle1, setToggle1] = useState("selected");
  const [toggle2, setToggle2] = useState("");
  const [toggle3, setToggle3] = useState("");

  // handle toggle
  const handleToggle = (handler) => {
    if (handler === "recordedClasses") {
      setRecordedClasses(true);
      setRooms(false);
      setRecordedLives(false);
      setToggle1("selected");
      setToggle2("");
      setToggle3("");
    }
    if (handler === "rooms") {
      setRecordedClasses(false);
      setRooms(true);
      setRecordedLives(false);
      setToggle1("");
      setToggle2("selected");
      setToggle3("");
    }
    if (handler === "recordedLives") {
      setRecordedClasses(false);
      setRooms(false);
      setRecordedLives(true);
      setToggle1("");
      setToggle2("");
      setToggle3("selected");
    }
  };

  return (
    <div className="features-courses">
      <div className="toggle-feature">
        <div
          className={`toggle ${toggle1}`}
          onClick={() => {
            handleToggle("recordedClasses");
          }}
        >
          Recorded Classes
        </div>
        <div
          className={`toggle ${toggle2}`}
          onClick={() => {
            handleToggle("rooms");
          }}
        >
          Live & Rooms Classes{" "}
        </div>
        <div
          className={`toggle ${toggle3}`}
          onClick={() => {
            handleToggle("recordedLives");
          }}
        >
          Recorded Lives
        </div>
      </div>
      <div className="filter">
        <SearchInput />
        <select name="sort" id="sort">
          <option value="sort">Sort by: Latest</option>
        </select>
      </div>
      <div className="course-cards">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </div>
  );
};

export default FeaturesCourses;