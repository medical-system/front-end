import { Medicins } from "../../../@facke-data/medicins.js";
import { RiDeleteBinLine } from "react-icons/ri";
import { PropTypes } from "prop-types";
const TableHead = [
  "Item",
  "Price",
  "Dosage",
  "Instruction",
  "quantity",
  "Amount",
  "Actions",
];

const RenderActionCell = () => {
  return (
    <button className="bg-red-600 bg-opacity-5 text-red-600 rounded-lg border border-red-100 py-3 px-4 text-sm">
      <RiDeleteBinLine />
    </button>
  );
};

const MedicinTableData = ({ type }) => {
  return (
    <table className="table-auto w-full">
      <thead className="bg-dry rounded-md overflow-hidden">
        <tr>
          {TableHead.map((column) =>
            type ? (
              column === "Actions" ? null : (
                <th
                  key={column}
                  className="text-start text-sm font-medium py-3 px-2 whitespace-nowrap"
                >
                  {column}
                </th>
              )
            ) : (
              <th
                key={column}
                className="text-start text-sm font-medium py-3 px-2 whitespace-nowrap"
              >
                {column}
              </th>
            )
          )}
        </tr>
      </thead>
      <tbody>
        {Medicins.map((data) => (
          <tr
            key={data.id}
            className="border-b border-border hover:bg-[#f3f6f7] transitions"
          >
            <td className="text-start text-sm py-4 px-2 whitespace-nowrap">
              {data.item}
            </td>
            <td className="text-start text-sm py-4 px-2 whitespace-nowrap md:min-w-max min-w-[200px]">
              {data.price}
            </td>
            <td className="text-start text-sm py-4 px-2 whitespace-nowrap">
              {data.dosage}
            </td>
            <td className="text-start text-sm py-4 px-2 whitespace-nowrap">
              {data.instruction}
            </td>
            <td className="text-start text-sm py-4 px-2 whitespace-nowrap">
              {data.quantity}
            </td>
            <td className="text-start text-sm py-4 px-2 whitespace-nowrap">
              {data.amount}
            </td>
            {!type && (
              <td className="text-start text-sm py-4 px-2 whitespace-nowrap">
                <RenderActionCell />
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
MedicinTableData.propTypes = {
  type: PropTypes.string,
};

export default MedicinTableData;
