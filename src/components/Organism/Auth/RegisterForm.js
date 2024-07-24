import InputForm from "../../Molecules/Form/InputForm";
import Button from "../../Atoms/Button/Button";

const FormRegister = () => {
  return (
    <>
      <InputForm name="username" type="text" placeholder="insert your username">
        Username
      </InputForm>
      <InputForm name="email" type="email" placeholder="Example@email.com">
        Email
      </InputForm>
      <InputForm name="password" type="password" placeholder="*****">
        Password
      </InputForm>
      <InputForm
        name="confirm_password"
        type="password"
        placeholder="confirm your password"
      >
        Confirm Password
      </InputForm>
      <Button type="submit" classname="bg-blue-700 w-full">
        Sign Up
      </Button>
    </>
  );
};

export default FormRegister;
