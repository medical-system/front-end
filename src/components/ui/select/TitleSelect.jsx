import { Field, Select } from "@headlessui/react";

export default function TitleSelect() {
  return (
    <div className="w-full">
      <Field>
        <div className="relative">
          <Select className="w-full flex-btn text-textGray text-sm p-4 border border-border font-light rounded-lg focus:border focus:border-subMain outline-none">
            <option value="Dr.">Dr.</option>
            <option value="Mr.">Mr.</option>
            <option value="Mrs">Mrs.</option>
            <option value="Ms.">Ms.</option>
          </Select>
        </div>
      </Field>
    </div>
  );
}
