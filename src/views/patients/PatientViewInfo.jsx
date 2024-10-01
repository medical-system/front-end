import userImg from "../../assets/user2.png";
import { FaChartBar, FaPlus, FaRegCalendarAlt } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import { FaRegImage } from "react-icons/fa";
import { AiOutlineDollar } from "react-icons/ai";

import { LuUser2 } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import { BsEye } from "react-icons/bs";
import { BiTrash } from "react-icons/bi";

const PatientViewInfo = () => {
  const [active, setActive] = useState(0);
  const listLinks = [
    {
      id: 1,
      icon: FaChartBar,
      title: "Medical Records",
    },
    {
      id: 2,
      icon: FaRegCalendarAlt,
      title: "Appointments",
    },
    {
      id: 3,
      icon: FaRegFileAlt,
      title: "Invoices",
    },
    {
      id: 4,
      icon: AiOutlineDollar,
      title: "Payments",
    },
    {
      id: 5,
      icon: FaRegImage,
      title: "Images",
    },
    {
      id: 6,
      icon: LuUser2,
      title: "Personal Information",
    },
    {
      id: 7,
      icon: FaRegHeart,
      title: "Health Information",
    },
  ];
  const listCards = [
    {
      id: 1,
      date: "13, Jan 2021",
      complaint: "Sudden loss of vision,Red eyes,Double vi...",
      Diagnosis: "High blood pressure, Diabetes, Hypertens...",
      Treatement: "Refractive Lens Exchange (RLE)",
      Prescription: "Paracetamol, Amoxicillin, Ibuprofen, Asp...",
      Tsh: 150000,
    },
    {
      id: 2,
      date: "20, Mar 2021",
      complaint: "Sudden loss of vision,Red eyes,Double vi...",
      Diagnosis: "High blood pressure, Diabetes, Hypertens...",
      Treatement: "Refractive Lens Exchange (RLE)",
      Prescription: "Paracetamol, Amoxicillin, Ibuprofen, Asp...",
      Tsh: 30000,
    },
  ];
  return (
    <div className="grid grid-cols-12 gap-6 my-8 items-start">
      {/* left side */}
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="100"
        data-aos-offset="200"
        className="col-span-12 flex-col items-center center gap-6 lg:col-span-4 bg-white rounded-xl border-[1px] border-border p-6 lg:sticky top-28"
      >
        <img
          src={userImg}
          alt="setting"
          className="w-40 h-40 rounded-full object-cover border border-dashed border-subMain"
        />
        <div className="gap-2 flex-colo text-center">
          <h2 className="text-sm font-semibold">Amani Mmassy</h2>
          <p className="text-xs text-textGray">amanimmassy@gmail.com</p>
          <p className="text-xs">+254 712 345 678</p>
        </div>
        <div className="flex-colo gap-3 px-2 xl:px-12 w-full">
          {listLinks.map((item, i) => (
            <button
              key={item.id}
              onClick={() => setActive(i)}
              className={`${
                active === i ? "bg-text text-subMain" : "bg-dry text-main"
              }
                text-xs gap-4 flex items-center w-full p-4 rounded hover:bg-text hover:text-subMain`}
            >
              <item.icon className="text-lg" /> {item.title}
            </button>
          ))}
        </div>
      </div>

      {/* right side */}
      <div
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="100"
        data-aos-offset="200"
        className="col-span-12 lg:col-span-8 bg-white rounded-xl border-[1px] border-border p-6"
      >
        <div className="flex-btn gap-4 mb-6">
          <h1 className="text-sm font-medium sm:block hidden">
            Medical Record
          </h1>
          <div className="sm:w-1/4 w-full">
            <button className="w-full flex-rows gap-4 hover:opacity-80 transitions bg-subMain text-white text-sm font-medium px-2 py-4 rounded">
              New Record
              <FaPlus className="text-xs" />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          {listCards.map((item) => (
            <div
              key={item.id}
              className="bg-dry items-start grid grid-cols-12 gap-4 rounded-xl border-[1px] border-border p-6"
            >
              <div className="col-span-12 md:col-span-2">
                <p className="text-xs text-textGray font-medium">
                  13, Jan 2021
                </p>
              </div>
              <div className="col-span-12 md:col-span-6 flex flex-col gap-2">
                <p className="text-xs text-main font-light">
                  <span className="font-medium">Complaint:</span>
                  {item.complaint}
                </p>
                <p className="text-xs text-main font-light">
                  <span className="font-medium">Diagnosis:</span>
                  {item.Diagnosis}
                </p>
                <p className="text-xs text-main font-light">
                  <span className="font-medium">Treatment:</span>
                  {item.Treatement}
                </p>
                <p className="text-xs text-main font-light">
                  <span className="font-medium">Prescription:</span>
                  {item.Prescription}
                </p>
              </div>
              <div className="col-span-12 md:col-span-2">
                <p className="text-xs text-subMain font-semibold">
                  <span className="font-light text-main">(Tsh)</span> {item.Tsh}
                </p>
              </div>
              <div className="col-span-12 md:col-span-2 flex-rows gap-2">
                <button className="text-sm flex-colo center bg-white text-subMain border border-border rounded-md w-2/4 md:w-10 h-10">
                  <BsEye/>
                </button>
                <button className="text-sm flex-colo center bg-white text-red-600 border border-border rounded-md w-2/4 md:w-10 h-10">
                  <BiTrash/>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PatientViewInfo;
