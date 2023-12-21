"use client";
import Image from "next/image";
import "./ProfilePicture.css";
import { useEffect, useState } from "react";
import axiosInstance from "@/utils/utils";
import { baseUrl } from "@/utils/constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProfilePicture = ({ userInfo }) => {
  const { first_name, last_name, phone, image } = userInfo || {};
  const { url } = image || {};
  const [profilePic, setProfilePic] = useState();
  console.log(image);

  // update user info
  const handleSubmit = async () => {
    const data = new FormData();
    data.append("image", profilePic);
    data.append("first_name", first_name);
    data.append("last_name", last_name);
    data.append("phone", phone);
    try {
      const response = await axiosInstance.post(
        `${baseUrl}/auth/student/profile/update`,
        data,
      );
      console.log(response);
      window.location.reload();
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  useEffect(() => {
    if (profilePic) {
      handleSubmit();
    } else {
      return;
    }
  }, [profilePic]);
  return (
    <div className="profile-pictures">
      <ToastContainer />
      <div className="couverture-picture"></div>
      <div className="profile-picture">
        <div className="profile-img-container">
          <label htmlFor="profile-pic" className="profile-pic-label">
            <Image
              src={url}
              width={124}
              height={124}
              alt="profile-pic"
              className="profile-pic"
            />
            <input
              type="file"
              id="profile-pic"
              className="enter-img"
              onChange={(e) => setProfilePic(e.target.files[0])}
            />
          </label>
        </div>
        <div className="profile-user-info">
          <p className="nom">
            {first_name} {last_name}
          </p>
          <p className="phone-number">{phone}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePicture;
