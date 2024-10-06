import { CgClose } from "react-icons/cg";
import Uploader from "../../components/Uploader";

const Images = () => {
  return (
    <div className="flex-colo gap-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
        <div className="relative w-full">
          <img
            src="https://res.cloudinary.com/ds5bmx4ee/image/upload/v1711607746/Eye%20Clinic%20Dashboard/2_g7b8yh.jpg"
            alt="patient"
            className="w-full h-72 rounded-lg object-cover"
          />
          <button className="bg-white rounded-full w-8 h-8 flex-colo absolute -top-1 -right-1">
            <CgClose className="text-red-500" />
          </button>
        </div>
        <div className="relative w-full">
          <img
            src="https://res.cloudinary.com/ds5bmx4ee/image/upload/v1711607745/Eye%20Clinic%20Dashboard/3_hz4vrd.webp"
            alt="patient"
            className="w-full h-72 rounded-lg object-cover"
          />
          <button className="bg-white rounded-full w-8 h-8 flex-colo absolute -top-1 -right-1">
            <CgClose className="text-red-500" />
          </button>
        </div>
        <div className="relative w-full">
          <img
            src="https://res.cloudinary.com/ds5bmx4ee/image/upload/v1711607746/Eye%20Clinic%20Dashboard/4_mpyrax.jpg"
            alt="patient"
            className="w-full h-72 rounded-lg object-cover"
          />
          <button className="bg-white rounded-full w-8 h-8 flex-colo absolute -top-1 -right-1">
            <CgClose className="text-red-500" />
          </button>
        </div>
        <div className="relative w-full">
          <img
            src="https://res.cloudinary.com/ds5bmx4ee/image/upload/v1711607748/Eye%20Clinic%20Dashboard/5_ezdsku.webp"
            alt="patient"
            className="w-full h-72 rounded-lg object-cover"
          />
          <button className="bg-white rounded-full w-8 h-8 flex-colo absolute -top-1 -right-1">
            <CgClose className="text-red-500" />
          </button>
        </div>
        <div className="relative w-full">
          <img
            src="https://res.cloudinary.com/ds5bmx4ee/image/upload/v1711607746/Eye%20Clinic%20Dashboard/6_iqoxxa.jpg"
            alt="patient"
            className="w-full h-72 rounded-lg object-cover"
          />
          <button className="bg-white rounded-full w-8 h-8 flex-colo absolute -top-1 -right-1">
            <CgClose className="text-red-500" />
          </button>
        </div>
        <div className="relative w-full">
          <img
            src="https://res.cloudinary.com/ds5bmx4ee/image/upload/v1711607746/Eye%20Clinic%20Dashboard/7_yg4sbv.jpg"
            alt="patient"
            className="w-full h-72 rounded-lg object-cover"
          />
          <button className="bg-white rounded-full w-8 h-8 flex-colo absolute -top-1 -right-1">
            <CgClose className="text-red-500" />
          </button>
        </div>
        <div className="relative w-full">
          <img
            src="https://res.cloudinary.com/ds5bmx4ee/image/upload/v1711607749/Eye%20Clinic%20Dashboard/9_zmsbil.jpg"
            alt="patient"
            className="w-full h-72 rounded-lg object-cover"
          />
          <button className="bg-white rounded-full w-8 h-8 flex-colo absolute -top-1 -right-1">
            <CgClose className="text-red-500" />
          </button>
        </div>
        <div className="relative w-full">
          <img
            src="	https://res.cloudinary.com/ds5bmx4ee/image/upload/v1711607746/Eye%20Clinic%20Dashboard/1_uhqkrg.jpg"
            alt="patient"
            className="w-full h-72 rounded-lg object-cover"
          />
          <button className="bg-white rounded-full w-8 h-8 flex-colo absolute -top-1 -right-1">
            <CgClose className="text-red-500" />
          </button>
        </div>
        <div className="relative w-full">
          <img
            src="https://res.cloudinary.com/ds5bmx4ee/image/upload/v1711607746/Eye%20Clinic%20Dashboard/2_g7b8yh.jpg"
            alt="patient"
            className="w-full h-72 rounded-lg object-cover"
          />
          <button className="bg-white rounded-full w-8 h-8 flex-colo absolute -top-1 -right-1">
            <CgClose className="text-red-500" />
          </button>
        </div>
      </div>
      <div className="w-full text-center grid grid-cols-12 gap-4">
        <Uploader />
      </div>
      <button className="w-full flex-rows gap-4 hover:opacity-80 transitions bg-subMain text-white text-sm font-medium px-2 py-4 rounded">
        Save Changes
      </button>
    </div>
  );
};

export default Images;
