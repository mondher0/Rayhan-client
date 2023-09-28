import "./PersonalInformation.css";

const PersonalInformation = () => {
  return (
    <div className="personal-information">
      <form>
        <div className="btn">
          <button type="submit" className="hover">Edit</button>
        </div>

        <div className="form-controle">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" />
        </div>
        <div className="form-controle">
          <label htmlFor="last-name">Last name</label>
          <input type="text" id="last-name" />
        </div>
        <div className="form-controle">
          <label htmlFor="phone-number">Phone number</label>
          <input type="text" id="phone-number" />
        </div>
        <div className="form-controle">
          <label htmlFor="old">Old password</label>
          <input type="password" id="old" />
        </div>
        <div className="form-controle">
          <label htmlFor="new">New password</label>
          <input type="password" id="new" />
        </div>
      </form>
    </div>
  );
};

export default PersonalInformation;
