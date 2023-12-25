import { getToken } from "@/utils/lib";
import ProfileFather from "./Profile";
import { baseUrl } from "@/utils/constants";

const ProfilePage = async () => {
  // get user info
  const getUserInfo = async () => {
    const token = getToken();
    try {
      const response = await fetch(`${baseUrl}/user/info`, {
        cache: "no-cache",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const userInfo = await response.json();
      console.log("----------from profile--------------", userInfo);
      return userInfo;
    } catch (error) {
      throw new Error(error);
    }
  };

  // get genral stat
  const getGeneralStat = async () => {
    const token = getToken();
    try {
      const response = await fetch(`${baseUrl}/stats/student/get/general`, {
        cache: "no-cache",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const generalStat = await response.json();
      console.log("----------from profile--------------", generalStat);
      return generalStat.data;
    } catch (error) {
      throw new Error(error);
    }
  };

  const userInfoData = getUserInfo();
  const generalStatData = getGeneralStat();
  const [userInfo, generalStat] = await Promise.all([
    userInfoData,
    generalStatData,
  ]);
  return <ProfileFather userInfo={userInfo} generalStat={generalStat} />;
};

export default ProfilePage;
