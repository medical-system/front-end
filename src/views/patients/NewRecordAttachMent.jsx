import { FaX } from "react-icons/fa6";
import Uploader from "../../components/Uploader";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const NewRecordAttachMent = () => {
  return (
    <div className="flex w-full flex-col gap-4">
      <p className="text-black text-sm">Attachments</p>
      <div className="grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full">
        <div className="relative w-full">
          <img
            src="https://res.cloudinary.com/ds5bmx4ee/image/upload/v1711607746/Eye%20Clinic%20Dashboard/2_g7b8yh.jpg"
            alt="patient"
            className="w-full  md:h-40 rounded-lg object-cover"
          />
          <button className="bg-white rounded-full w-8 h-8 flex-colo absolute -top-1 -right-1 text-red-500">
            <FaX />
          </button>
        </div>
        <div className="relative w-full">
          <img
            src="https://res.cloudinary.com/ds5bmx4ee/image/upload/v1711607746/Eye%20Clinic%20Dashboard/4_mpyrax.jpg"
            alt="patient"
            className="w-full  md:h-40 rounded-lg object-cover"
          />
          <button className="bg-white rounded-full w-8 h-8 flex-colo absolute -top-1 -right-1 text-red-500">
            <FaX />
          </button>
        </div>
        <div className="relative w-full">
          <img
            src="https://res.cloudinary.com/ds5bmx4ee/image/upload/v1711607746/Eye%20Clinic%20Dashboard/1_uhqkrg.jpg"
            alt="patient"
            className="w-full  md:h-40 rounded-lg object-cover"
          />
          <button className="bg-white rounded-full w-8 h-8 flex-colo absolute -top-1 -right-1 text-red-500">
            <FaX />
          </button>
        </div>
        <div className="relative w-full">
          <img
            src="https://res.cloudinary.com/ds5bmx4ee/image/upload/v1711607749/Eye%20Clinic%20Dashboard/9_zmsbil.jpg"
            alt="patient"
            className="w-full  md:h-40 rounded-lg object-cover"
          />
          <button className="bg-white rounded-full w-8 h-8 flex-colo absolute -top-1 -right-1 text-red-500">
            <FaX />
          </button>
        </div>
      </div>
      <div className="w-full text-center grid grid-cols-12 gap-4">
        <Uploader />
      </div>
      <button className="w-full flex-rows gap-4 hover:opacity-80 transitions bg-subMain text-white text-sm font-medium px-2 py-4 rounded">
        Save Changes
        <IoIosCheckmarkCircleOutline className="text-white text-xl" />
      </button>
    </div>
  );
};

export default NewRecordAttachMent;
