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

  const userInfo = await getUserInfo();
  console.log("---------user info from profile---------------", userInfo);
  return <ProfileFather userInfo={userInfo} />;
};

export default ProfilePage;
