import { BiTrash } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ViewRecordModal from "../../components/ui/dialogs/ViewRecordDialog";

const MedicalRecords = () => {
  const listCards = [
    {
      id: 0,
      date: "13, Jan 2021",
      complaint: "Sudden loss of vision,Red eyes,Double vi...",
      Diagnosis: "High blood pressure, Diabetes, Hypertens...",
      Treatement: "Refractive Lens Exchange (RLE)",
      Prescription: "Paracetamol, Amoxicillin, Ibuprofen, Asp...",
      Tsh: 150000,
    },
    {
      id: 1,
      date: "20, Mar 2021",
      complaint: "Sudden loss of vision,Red eyes,Double vi...",
      Diagnosis: "High blood pressure, Diabetes, Hypertens...",
      Treatement: "Refractive Lens Exchange (RLE)",
      Prescription: "Paracetamol, Amoxicillin, Ibuprofen, Asp...",
      Tsh: 30000,
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
  const navigate = useNavigate();
  return (
    <>
      <div className="flex-btn gap-4 mb-6">
        <h1 className="text-sm font-medium sm:block hidden">Medical Record</h1>
        <div className="sm:w-1/4 w-full">
          <button
            onClick={() => navigate("/patients/view/:slug/new-medical-record")}
            className="w-full flex-rows gap-4 hover:opacity-80 transitions bg-subMain text-white text-sm font-medium px-2 py-4 rounded"
          >
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
              <p className="text-xs text-textGray font-medium">13, Jan 2021</p>
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
              <ViewRecordModal />
              <button className="text-sm flex-colo center bg-white text-red-600 border border-border rounded-md w-2/4 md:w-10 h-10">
                <BiTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MedicalRecords;
