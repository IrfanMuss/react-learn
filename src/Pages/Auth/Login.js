import AuthTemplate from "../../components/Templates/Auth/AuthTemplate";
import FormLogin from "../../components/Organism/Auth/FormLogin";

const LoginPage = () => {
  return (
    <form action="">
      <AuthTemplate title="Login">
        <FormLogin />
      </AuthTemplate>
    </form>
  );
};

export default LoginPage;
