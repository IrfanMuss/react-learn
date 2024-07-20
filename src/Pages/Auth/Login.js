import AuthTemplate from "../../components/Templates/Auth/AuthTemplate";
import FormLogin from "../../components/Organism/Auth/FormLogin";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <form action="">
      <AuthTemplate title="Login">
        <FormLogin />
        <p className="text-sm mt-5 text-center">
          Don't have an account?{" "}
          <Link to="/register" className="font-bold text-blue-600">
            Sign Up
          </Link>
        </p>
      </AuthTemplate>
    </form>
  );
};

export default LoginPage;
