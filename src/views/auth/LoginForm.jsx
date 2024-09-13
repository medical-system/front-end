import FormProvider from "../../components/hook-form/FormProvider";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import RHFTextField from "../../components/hook-form/RHFTextField";
import { LoginSchema } from "../../validation/loginSchema";
import { BiLogInCircle } from "react-icons/bi";

const LoginForm = () => {
  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues: {
      email: "admin@gmail.com",
      password: "admin123",
    },
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors },
  } = methods;
  const onSubmit = async (data) => {
    try {
      console.log(data);
      // submit data to backend
    } catch (error) {
      console.log(error);
      reset();
      setError("afterSubmit", {
        ...error,
        message: error.message || error,
      });
    }
  };
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <div spacing={3}>
        {!!errors.afterSubmit && (
          <p className="text-red-500">{errors.afterSubmit.message}</p>
        )}
      </div>
      <div className="flex-colo gap-4">
        <RHFTextField name="email" label="Email" type="email" />
        <RHFTextField name="password" label="Password" type="password" />
        <button className="w-full flex-rows gap-4 hover:opacity-80 transitions bg-subMain text-white text-sm font-medium px-2 py-4 rounded leading-[1.2]">
          Login <BiLogInCircle size={20} className="text-xl text-white" />
        </button>
      </div>
    </FormProvider>
  );
};

export default LoginForm;
