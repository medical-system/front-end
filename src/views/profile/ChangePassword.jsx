import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import UsedInput from "../../components/hook-form/UsedInput";

const ChangePassword = () => {
  return (
    <div className="flex flex-col gap-4">
      <UsedInput lable="Old Password" type="password" />
      <UsedInput lable="New Password" type="password" />
      <UsedInput lable="Confirm Password" type="password" />
      <button className="w-full flex-rows gap-4 hover:opacity-80 transitions bg-subMain text-white text-sm font-medium px-2 py-4 rounded">
        Save Changes
        <IoIosCheckmarkCircleOutline className="text-white text-xl" />
      </button>
    </div>
  );
};

export default ChangePassword;
