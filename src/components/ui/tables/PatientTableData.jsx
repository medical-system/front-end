/* eslint-disable react/prop-types */
import { Patients } from "../../../@facke-data/patients.js";
import ActionDropDown from "../menu/ActionMenu.jsx";
const TableHead = [
  "ID",
  "Patient",
  "Created At",
  "Gender",
  "Blood Group",
  "Age",
  "Actions",
];

const RenderPatientCell = ({ avatar, phone, name }) => {
  return (
    <div className="flex gap-4 items-center">
      <img
        src={avatar}
        alt="avatar"
        className="w-12 h-12 rounded-full object-cover border-border"
      />
      <div>
        <h4 className="text-sm font-medium">{name}</h4>
        <p className="text-xs mt-1 text-textGray">{phone}</p>
      </div>
    </div>
  );
};
const RenderGenderCell = ({ gender }) => {
  return (
    <span
      className={`py-1 px-4 bg-opacity-10 text-xs rounded-xl 
            ${
              gender === "Male"
                ? "bg-subMain text-subMain"
                : "bg-orange-500 text-orange-500"
            }`}
    >
      {gender}
    </span>
  );
};
const RenderActionCell = ({ id }) => {
  return <ActionDropDown id={id} />;
};

const PatientTableData = () => {
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
        {Patients.map((data) => (
          <tr
            key={data.id}
            className="border-b border-border hover:bg-[#f3f6f7] transitions"
          >
            <td className="text-start text-sm py-4 px-2 whitespace-nowrap">
              {data.id}
            </td>
            <td className="text-start text-sm py-4 px-2 whitespace-nowrap md:min-w-max min-w-[200px]">
              <RenderPatientCell {...data} />
            </td>
            <td className="text-start text-sm py-4 px-2 whitespace-nowrap">
              {data.createdAt}
            </td>
            <td className="text-start text-sm py-4 px-2 whitespace-nowrap">
              <RenderGenderCell gender={data.gender} />
            </td>
            <td className="text-start text-sm py-4 px-2 whitespace-nowrap">
              {data.bloodGroup}
            </td>
            <td className="text-start text-sm py-4 px-2 whitespace-nowrap">
              {data.age}
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

export default PatientTableData;
