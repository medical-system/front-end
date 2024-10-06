import { BloodGroupSelect } from "../../components/ui/select/BasicSelect";
import MedicinTable from "./MedicinTable";
import NewRecordAttachMent from "./NewRecordAttachMent";
import NewRecordTreatements from "./NewRecordTreatements";

const NewRecordRight = () => {
  return (
    <div
      data-aos="fade-left"
      data-aos-duration="1000"
      data-aos-delay="100"
      data-aos-offset="200"
      className="flex flex-col col-span-12 lg:col-span-8 bg-white rounded-xl border-[1px] border-border p-6 gap-6"
    >
      <div className="flex w-full flex-col gap-3">
        <label className="text-black text-sm">Doctor</label>
        <BloodGroupSelect />
      </div>
      <div className="flex text-sm w-full flex-col">
        <label className="text-black">Complians</label>
        <textarea
          placeholder="sudden loss of vision,Red eyes,Double vision..."
          className="w-full bg-transparent text-sm mt-3 p-4 border border-border font-light rounded-lg focus:border focus:border-subMain outline-none"
        ></textarea>
      </div>
      <div className="flex text-sm w-full flex-col">
        <label className="text-black">Diagonsis</label>
        <textarea
          placeholder="Heigh blood pressure..."
          className="w-full bg-transparent text-sm mt-3 p-4 border border-border font-light rounded-lg focus:border focus:border-subMain outline-none"
        ></textarea>
      </div>
      <div className="flex text-sm w-full flex-col">
        <label className="text-black">Vital Signs</label>
        <textarea
          placeholder="blood pressure plus..."
          className="w-full bg-transparent text-sm mt-3 p-4 border border-border font-light rounded-lg focus:border focus:border-subMain outline-none"
        ></textarea>
      </div>
      <NewRecordTreatements />
      <MedicinTable/>
      <NewRecordAttachMent/>
    </div>
  );
};

export default NewRecordRight;
