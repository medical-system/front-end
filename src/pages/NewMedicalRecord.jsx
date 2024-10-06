import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import NewRecordLeft from "../views/patients/NewRecordLeft";
import NewRecordRight from "../views/patients/NewRecordRight";

const NewMedicalRecord = () => {
  return (
    <>
      {/* page title */}
      <div className="flex items-center gap-4">
        <Link
          to={"/patients/view/:slug"}
          className={
            "bg-white border border-subMain border-dashed rounded-lg py-3 px-4 text-md"
          }
        >
          <BiArrowBack />
        </Link>
        <h1 className="text-xl font-semibold">New Medical Record</h1>
      </div>
    <div className=" grid grid-cols-12 gap-6 my-8 items-start">
        {/* left side */}
        <NewRecordLeft/>

        {/* right side */}
        <NewRecordRight/>
    </div>

    </>
  );
};

export default NewMedicalRecord;
