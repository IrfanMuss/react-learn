import Form from "../../Molecules/Form/Form";
import Button from "../../Atoms/Button/Button";

const FormLogin = () => {
  return (
    <>
      <Form name="email" type="email" placeholder="Masukkan email atau username">
        Email atau Username
      </Form>
      <Form name="password" type="password" placeholder="*****">
        Password
      </Form>
      <Button type="submit" classname="bg-blue-700 w-full">
        Login
      </Button>
    </>
  );
};

export default FormLogin;
