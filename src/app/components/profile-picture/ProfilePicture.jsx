import Image from "next/image";
import "./ProfilePicture.css";

const ProfilePicture = () => {
  return (
    <div className="profile-pictures">
      <div className="couverture-picture"></div>
      <div className="profile-picture">
        <div className="profile-img-container">
          <Image
            src="/images/pic.png"
            width={124}
            height={124}
            alt="profile-pic"
            className="profile-pic"
          />
        </div>
        <div className="profile-user-info">
          <p className="nom">Mondher Mameri</p>
          <p className="phone-number">0558604705</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePicture;
