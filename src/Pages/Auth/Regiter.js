import LoginTemplate from "../../components/Templates/Auth/AuthTemplate";
import FormRegister from "../../components/Organism/Auth/FormRegister";

const RegisterPage = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <form action="">
        <LoginTemplate title="Register">
          <FormRegister></FormRegister>
        </LoginTemplate>
      </form>
    </div>
  );
};

export default RegisterPage;
