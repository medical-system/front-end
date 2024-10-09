import { useState } from "react";

// eslint-disable-next-line react/prop-types
const CustomeCheckBox = ({ label }) => {
    const [isChecked,setIsChecked] = useState(false)
  return (
    <div className="text-sm w-full flex flex-row items-center">
      <label className="flex-colo cursor-pointer relative">
        <input
          type="checkbox"
          name="Cataracts Surgery"
          className="absolute opacity-0"
          onChange={() => setIsChecked(!isChecked)}
        />
        <span className={`border rounded text-${isChecked ? "white" : "black"}  w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 border-gray-300 bg-${isChecked ? "subMain" : "white"}`}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            className={`text-[10px] ${isChecked ? "block" : "hidden"}`}
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
          </svg>
        </span>
      </label>
       {label && <p className="text-black text-xs ml-2">{label}</p>}
    </div>
  );
};

export default CustomeCheckBox;
