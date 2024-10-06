import CustomeCheckBox from "../../components/ui/inputs/CustomeCheckBox"

const NewRecordTreatements = () => {
  return (
    <div className="flex w-full flex-col gap-4">
        <p className="text-black text-sm">Treatement</p>
        <div className="grid xs:grid-cols-2 md:grid-cols-3 gap-6 pb-6">
            <CustomeCheckBox label={"Cataracts Surgery"}/>
            <CustomeCheckBox label={"Cataracts Surgery"}/>
            <CustomeCheckBox label={"Cataracts Surgery"}/>
            <CustomeCheckBox label={"Cataracts Surgery"}/>
            <CustomeCheckBox label={"Cataracts Surgery"}/>
            <CustomeCheckBox label={"Cataracts Surgery"}/>
            <CustomeCheckBox label={"Cataracts Surgery"}/>
            <CustomeCheckBox label={"Cataracts Surgery"}/>
            <CustomeCheckBox label={"Cataracts Surgery"}/>
            <CustomeCheckBox label={"Cataracts Surgery"}/>
        </div>
    </div>
  )
}

export default NewRecordTreatements