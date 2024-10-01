import PatientsCards from "../views/patients/PatientsCards";
import PatientsTable from "../views/patients/PatientsTable";
import ButtonAdd from "../components/ButtonAdd";

const Patients = () => {
  return (
    <>
      {/* page title */}
      <h1 className="text-xl font-semibold">Patients</h1>
      {/*patients cards*/}
      <PatientsCards />

      {/*patients table*/}
      <PatientsTable />

      {/* add patient */}
      <ButtonAdd path={'/patients/create'}/>
    </>
  );
};

export default Patients;
