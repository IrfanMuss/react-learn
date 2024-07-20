import Form from "../../Molecules/Form/Form";
import Button from "../../Atoms/Button/Button";

const FormRegister = () => {
  return (
    <>
      <Form name="username" type="text" placeholder="insert your username">
        Username
      </Form>
      <Form name="email" type="email" placeholder="Example@email.com">
        Email
      </Form>
      <Form name="password" type="password" placeholder="*****">
        Password
      </Form>
      <Form
        name="confirm_password"
        type="password"
        placeholder="confirm your password"
      >
        Confirm Password
      </Form>
      <Button type="submit" classname="bg-blue-700 w-full">
        Login
      </Button>
    </>
  );
};

export default FormRegister;
