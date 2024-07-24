import RegisterForm from "../../components/Organism/Auth/RegisterForm";
import AuthTemplate from "../../components/Templates/Auth/AuthTemplate";

const RegisterPage = () => {
  return (
      <AuthTemplate title="Register">
        <RegisterForm />
      </AuthTemplate>
  );
};

export default RegisterPage;
