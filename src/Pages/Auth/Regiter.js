import LoginTemplate from "../../components/Templates/Auth/AuthTemplate";
import FormRegister from "../../components/Organism/Auth/FormRegister";

const RegisterPage = () => {
  return (
    <form action="">
      <LoginTemplate title="Register">
        <FormRegister></FormRegister>
      </LoginTemplate>
    </form>
  );
};

export default RegisterPage;
