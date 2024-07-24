import AuthTemplate from "../../components/Templates/Auth/AuthTemplate";
import LoginForm from "../../components/Organism/Auth/LoginForm";

const LoginPage = () => {
  return (
      <AuthTemplate title="Login">
        <LoginForm />
      </AuthTemplate>
  );
};

export default LoginPage;
