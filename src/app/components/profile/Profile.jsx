import ProfilePicture from "../profile-picture/ProfilePicture";
import StatistiqueContainer from "../statistique-container/StatistiqueContainer";
import "./Profile.css";
import balanceStat from "./balance-stat.svg";
import addStat from "./add-stat.svg";
import courseStat from "./course-stat.svg";
import finishedStat from "./finished-stat.svg";
import rewardsStat1 from "./rewards-stat1.svg";
import rewardsStat2 from "./rewards-stat2.svg";
import ProfileFeatures from "../profile-features/ProfileFeatures";
import { useTranslations } from "next-intl";

const Profile = () => {
  const t = useTranslations("afterLogin");
  return (
    <div className="profile">
      <ProfilePicture />
      <div className="statistiques">
        <StatistiqueContainer
          stat1={balanceStat}
          stat2={addStat}
          text={t("myBalance")}
          number="4000 DA"
        />
        <StatistiqueContainer
          stat1={rewardsStat1}
          stat2={rewardsStat2}
          text={t("myReward")}
          number="2300 DA"
        />
        <StatistiqueContainer
          stat1={courseStat}
          text={t("courseToContinue")}
          number="13"
        />
        <StatistiqueContainer
          stat1={finishedStat}
          text={t("finishedCourses")}
          number={22}
        />
      </div>
      <ProfileFeatures />
    </div>
  );
};

export default Profile;
