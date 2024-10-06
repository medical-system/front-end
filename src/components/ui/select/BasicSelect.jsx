import { Field, Select } from "@headlessui/react";

export default function TitleSelect() {
  return (
    <div className="w-full">
      <Field>
        <div className="relative">
          <Select className="w-full flex-btn text-textGray text-sm p-4 border border-border font-light rounded-lg focus:border focus:border-subMain outline-none">
            <option value="Dr.">Dr.</option>
            <option value="Mr.">Mr.</option>
            <option value="Mrs.">Mrs.</option>
            <option value="Ms.">Ms.</option>
          </Select>
        </div>
      </Field>
    </div>
  );
}

export const SortSelect = () => {
  return (
    <div className="w-full">
      <Field>
        <div className="relative">
          <Select className="w-full outline-none bg-transparent">
            <option value="Sort By...">Sort By...</option>
            <option value="Newest Patients">Newest Patients</option>
            <option value="Oldest Patients">Oldest Patients</option>
          </Select>
        </div>
      </Field>
    </div>
  );
};
export const GenderSelect = () => {
  return (
    <div className="w-full">
      <Field>
        <div className="relative">
          <Select className="w-full outline-none bg-transparent">
            <option value="Gender">Gender...</option>
            <option value="Newest Patients">Male</option>
            <option value="Oldest Patients">Female</option>
          </Select>
        </div>
      </Field>
    </div>
  );
};
export const BloodGroupSelect = () => {
  return (
    <div className="w-full">
      <Field>
        <div className="relative ">
          <Select className="w-full flex-btn text-textGray text-sm p-4 border border-border font-light rounded-lg focus:border focus:border-subMain outline-none">
            <option value="Gender">Blood Type...</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </Select>
        </div>
      </Field>
    </div>
  );
};
