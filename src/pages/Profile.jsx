import ProfileImg from "../assets/profile-img.png";
import { LuUserPlus2 } from "react-icons/lu";
import { PiLockKeyLight } from "react-icons/pi";
import PersonalInfo from "../views/profile/PersonalInfo";
import { useState } from "react";
import ChangePassword from "../views/profile/ChangePassword";

const Profile = () => {
  const [profile, setProfile] = useState('info');
  return (
    <>
      <h1 className="text-xl font-semibold">Settings</h1>
      <div className="grid grid-cols-12 gap-6 my-8 items-start">
        {/* Profile left side */}
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="100"
          data-aos-offset="200"
          className="col-span-12 flex-colo items-center gap-6 lg:col-span-4 bg-white rounded-xl border-[1px] border-border p-6 lg:sticky top-28"
        >
          <img
            src={ProfileImg}
            alt="profile img"
            className="w-40 h-40 rounded-full object-cover border border-dashed border-subMain"
          />
          <div className="gap-2 flex-colo">
            <h2 className="text-sm font-semibold">Dr. Daudi Mburuge</h2>
            <p className="text-xs text-textGray">daudimburuge@gmail.com</p>
            <p className="text-xs">+254 712 345 678</p>
          </div>
          <div className="flex-colo gap-3 px-2 xl:px-10 w-full md:max-w-md">
            <button onClick={()=> setProfile('info')}
              className={`${profile === 'info' ? "bg-text text-subMain" : "bg-dry text-black"} 
                text-xs gap-4 flex items-center w-full p-4 rounded hover:text-subMain hover:bg-text transitions`}
            >
              <LuUserPlus2 className="text-lg" />
              personal Information
            </button>
            <button onClick={()=> setProfile('password')}
              className={`${profile === 'password' ? "bg-text text-subMain" : "bg-dry text-black"} 
              text-xs gap-4 flex items-center w-full p-4 rounded hover:bg-text hover:text-subMain transitions`}
            >
              <PiLockKeyLight className="text-lg" />
              Change Password
            </button>
          </div>
        </div>

        {/* Profile right side */}
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="100"
          data-aos-offset="200"
          className="col-span-12 lg:col-span-8 bg-white rounded-xl border-[1px] border-border p-6"
        >
          {profile === 'info' ? <PersonalInfo /> : <ChangePassword />}
        </div>
      </div>
    </>
  );
};

export default Profile;
