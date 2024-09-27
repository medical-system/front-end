import BannerImg from "../../assets/banner.avif";
import { AreaChart } from "../../components/charts/AreaChart";
import TransactionsTable from "./TransactionsTable.jsx";
import { IoIosStar } from "react-icons/io";
import { Link } from "react-router-dom";
import { AiFillClockCircle } from "react-icons/ai";
import { IoCloseCircle } from "react-icons/io5";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { RecentReviews } from "../../@facke-data/reviews.js";
import { Patients } from "../../@facke-data/patients.js";
import { RecentAppointments } from "../../@facke-data/appointments.js";

const Banner = () => {
  return (
    <div className="w-full my-6 grid xl:grid-cols-8 grid-cols-1 gap-6 overflow-hidden">
      <div className="xl:col-span-6  w-full">
        {/* Banner Image */}
        <div className="bg-white rounded-xl border-[1px] border-border relative">
          <img
            src={BannerImg}
            alt="banner-img"
            className="w-full h-72 rounded object-cover"
          />
          <div className="space-y-4 py-5 md:px-12 px-6 absolute top-0 bottom-0 left-0 right-0 bg-subMain bg-opacity-10 flex flex-col justify-center">
            <h1 className="text-xl text-subMain capitalize font-semibold">
              The future of eye care is here
            </h1>
            <p className="text-xs text-textGray max-w-96 leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor asin cididunt ut labore et dolore magna ali qua.
              Lorem ipsum dolor sit amet.
            </p>
            <div>
              <button className="py-3 px-6 rounded bg-subMain text-white flex-colo transitions text-xs">
                Read More
              </button>
            </div>
          </div>
        </div>

        {/* Area Chart */}
        <div className="mt-6 bg-white rounded-xl border-[1px] border-border p-5">
          {/*title*/}
          <div className="flex-btn gap-2">
            <h2 className="text-sm font-medium">Earning Reports</h2>
            <p className="flex gap-4 text-sm items-center">
              5.44%{" "}
              <span className="py-1 px-2 bg-subMain text-white text-xs rounded-xl">
                +2.4%
              </span>
            </p>
          </div>
          {/* Chart */}
          <div className="mt-4">
            <AreaChart />
          </div>
        </div>

        {/*Recent Transactions*/}
        <TransactionsTable />
      </div>
      <div
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="10"
        data-aos-offset="200"
        className="xl:col-span-2 xl:block grid sm:grid-cols-2 gap-6"
      >
        {/* Recent Reviews */}
        <div className="bg-white rounded-xl border-[1px] border-border p-5">
          <h2 className="text-sm font-medium">Recent Reviews</h2>
          {RecentReviews.map((item) => (
            <div
              key={item.id}
              className="flex-btn gap-4 mt-6 border-b pb-4 border-border"
            >
              <div className="flex gap-4 items-center">
                <img
                  src={item.avatar}
                  alt="Mauris auctor"
                  className="w-10 h-10 rounded-md object-cover"
                />
                <div className="flex flex-col gap-1">
                  <h3 className="text-xs font-medium">{item.name}</h3>
                  <p className="text-xs text-gray-400 text-wrap leading-5 max-w-44 truncate">
                    {item.desc}
                  </p>
                </div>
              </div>
              <div className="flex-rows gap-1">
                <p className="text-xs text-textGray">{item.rating}</p>
                <p className="text-orange-500 text-xs">
                  <IoIosStar />
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Patients */}
        <div className="bg-white rounded-xl border-[1px] border-border p-5 xl:mt-6">
          <h2 className="text-sm font-medium">Recent Patients</h2>
          {Patients.map((item) => (
            <div
              key={item.id}
              className="flex-btn gap-4 mt-6 border-b pb-4 border-border"
            >
              <div className="flex gap-4 items-center">
                <img
                  src={item.avatar}
                  alt="Mauris auctor"
                  className="w-10 h-10 rounded-md object-cover"
                />
                <div className="flex flex-col gap-1">
                  <h3 className="text-xs font-medium">{item.name}</h3>
                  <p className="text-xs text-gray-400 text-wrap leading-5 max-w-44 truncate">
                    {item.phone}
                  </p>
                </div>
              </div>
              <p className="text-xs text-textGray">{item.time}</p>
            </div>
          ))}
        </div>

        {/* today appointments */}
        <div className="bg-white rounded-xl border-[1px] border-border p-5 xl:mt-6">
          <h2 className="text-sm mb-4 font-medium">Today Appointments</h2>
          {RecentAppointments.map((item) => (
            <div key={item.id} className="grid grid-cols-12 gap-2 items-center">
              <p className="text-textGray text-[12px] col-span-3 font-light">
                {item.sinceWhen}
              </p>
              <div className="center relative col-span-2">
                <hr className="w-[2px] h-20 bg-border" />
                {item.status === "Pending" ? (
                  <div
                    className="w-7 h-7 center text-sm bg-opacity-10
                 bg-orange-500 text-orange-500  rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  >
                    <AiFillClockCircle />
                  </div>
                ) : item.status === "Cancelled" ? (
                  <div
                    className="w-7 h-7 center text-sm bg-opacity-10
                 bg-red-500 text-red-500  rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  >
                    <IoCloseCircle />
                  </div>
                ) : (
                  <div
                    className="w-7 h-7 center text-sm bg-opacity-10
                 bg-green-500 text-green-500  rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  >
                    <IoIosCheckmarkCircle />
                  </div>
                )}
              </div>
              <Link
                className="flex flex-col gap-1 col-span-6"
                to="/appointments"
              >
                <h2 className="text-xs font-medium">{item.patient}</h2>
                <p className="text-[12px] font-light text-textGray">
                  {item.time}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
