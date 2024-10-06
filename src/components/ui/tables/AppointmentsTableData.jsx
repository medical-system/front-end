/* eslint-disable react/prop-types */
import { RecentAppointments } from "../../../@facke-data/appointments.js";
import { CgEye } from "react-icons/cg";

const TableHead = ["Date", "Doctor", "Status", "Time", "Actions"];

const RenderDoctorCell = ({ doctorName, doctorPhone }) => {
  return (
    <div className="flex flex-col">
      <h4 className="text-sm font-medium">{doctorName}</h4>
      <p className="text-xs mt-1 text-textGray">{doctorPhone}</p>
    </div>
  );
};
const RenderStatusCell = ({ status }) => {
  return (
    <span
      className={`py-1 px-4 bg-opacity-10 text-xs rounded-xl 
              ${
                status === "Scheduled"
                  ? "bg-subMain text-subMain"
                  : status === "Pending"
                  ? "bg-orange-500 text-orange-500"
                  : "bg-red-600 text-red-600"
              }`}
    >
      {status === "Scheduled" ? "Approved" : status}
    </span>
  );
};
const RenderActionCell = () => {
  return (
    <button className="border text-main py-2 px-4 rounded-lg">
      <CgEye className="text-subMain" />
    </button>
  );
};

const AppointmentsTableData = () => {
  return (
    <table className="table-auto w-full">
      <thead className="bg-dry rounded-md overflow-hidden">
        <tr>
          {TableHead.map((column) => (
            <th
              key={column}
              className="text-start text-sm font-medium py-3 px-2 whitespace-nowrap"
            >
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {RecentAppointments.map((data) => (
          <tr
            key={data.id}
            className="border-b border-border hover:bg-[#f3f6f7] transitions"
          >
            <td className="text-start text-sm py-4 px-2 whitespace-nowrap">
              {data.date}
            </td>
            <td className="text-start text-sm py-4 px-2 whitespace-nowrap md:min-w-max min-w-[200px]">
              <RenderDoctorCell {...data} />
            </td>
            <td className="text-start text-sm py-4 px-2 whitespace-nowrap">
              <RenderStatusCell status={data.status}/>
            </td>
            <td className="text-start text-sm py-4 px-2 whitespace-nowrap">
              {data.time}
            </td>
            <td className="text-start text-sm py-4 px-2 whitespace-nowrap">
              <RenderActionCell id={data.id} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AppointmentsTableData;
