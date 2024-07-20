import FormRegister from "../../components/Organism/Auth/FormRegister";
import AuthTemplate from "../../components/Templates/Auth/AuthTemplate";

const RegisterPage = () => {
  return (
    <form action="">
      <AuthTemplate title="Register">
        <FormRegister />
      </AuthTemplate>
    </form>
  );
};

export default RegisterPage;
