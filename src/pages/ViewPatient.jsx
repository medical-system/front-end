import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import PatientViewInfo from "../views/patients/PatientViewInfo";

const ViewPatient = () => {
  return (
    <>
      {/* patient name */}
      <div className="flex items-center gap-4">
        <Link
          to={"/patients"}
          className={
            "bg-white border border-subMain border-dashed rounded-lg py-3 px-4 text-md"
          }
        >
          <BiArrowBack />
        </Link>
        <h1 className="text-xl font-semibold">Amani Mmassy</h1>
      </div>

      {/* patient details */}
      <PatientViewInfo/>
    </>
  );
};

export default ViewPatient;
