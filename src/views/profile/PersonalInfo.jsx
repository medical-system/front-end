import UsedInput from "../../components/hook-form/UsedInput";
import TitleSelect from "../../components/ui/select/TitleSelect";
import Uploader from "../../components/Uploader";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const PersonalInfo = () => {
  return (
    <div className="flex-colo gap-4">
      <div className="flex gap-3 flex-col w-full col-span-6">
        <p className="text-sm">Profile Image</p>
        <div className="w-full text-center grid grid-cols-12 gap-4">
          <Uploader />
        </div>
      </div>
      <div className="flex w-full flex-col gap-3">
        <p className="text-black text-sm">Title</p>
        <div className="text-sm relative w-full">
          <TitleSelect />
        </div>
      </div>
      <UsedInput lable="Full Name" type="text"/>
      <UsedInput lable="Phone Number" type="number"/>
      <UsedInput lable="Email" type="text"/>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        <button className="w-full flex-rows gap-4 hover:opacity-80 transitions bg-subMain text-white text-sm font-medium px-2 py-4 rounded">
            Delete Account
            <RiDeleteBinLine className="text-white text-xl"/>
        </button>
        <button className="w-full flex-rows gap-4 hover:opacity-80 transitions bg-subMain text-white text-sm font-medium px-2 py-4 rounded">
            Save Changes
            <IoIosCheckmarkCircleOutline className="text-white text-xl"/>
        </button>

      </div>
    </div>
  );
};

export default PersonalInfo;
