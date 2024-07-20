import AuthTemplate from "../../components/Templates/Auth/AuthTemplate";
import FormLogin from "../../components/Organism/Auth/FormLogin";

const LoginPage = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <form action="">
        <AuthTemplate title="Login">
          <FormLogin></FormLogin>
        </AuthTemplate>
      </form>
    </div>
  );
};

export default LoginPage;
