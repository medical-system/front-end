import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import PatientForm from "../views/patients/PatientForm";
const CreatePatient = () => {
  return (
    <>
      {/* page title */}
      <div className="flex items-center gap-4">
        <Link
          to={"/patients"}
          className={
            "bg-white border border-subMain border-dashed rounded-lg py-3 px-4 text-md"
          }
        >
          <BiArrowBack />
        </Link>
        <h1 className="text-xl font-semibold">Create Patient</h1>
      </div>

      {/* form */}
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
        data-aos-offset="200"
        className="bg-white my-8 rounded-xl border-[1px] border-border p-6"
      >
        <PatientForm/>
      </div>
    </>
  );
};

export default CreatePatient;
