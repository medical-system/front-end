import { useFormContext, Controller } from "react-hook-form";
import { PropTypes } from "prop-types";

const RHFTextField = ({name, label, ...other}) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className="text-center flex-colo items-start">
          <label htmlFor="email">{label}</label>
          <input
            {...field}
            label={label}
            {...other}
            className={`w-full bg-transparent text-sm mt-3 p-4 outline-none border ${error ? "border-red-500" : "border-border"} font-light rounded-lg focus:border ${error ? "focus:border-red-500" : "focus:border-subMain"}`}
          />
          {error && <p className="text-red-500 mt-1 text-sm">{error.message}</p>}
        </div>
      )}
    />
  );
};

export default RHFTextField;

RHFTextField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  other: PropTypes.any,
};
