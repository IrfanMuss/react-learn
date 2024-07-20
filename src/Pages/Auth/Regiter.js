import FormRegister from "../../components/Organism/Auth/FormRegister";
import AuthTemplate from "../../components/Templates/Auth/AuthTemplate";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <form action="">
      <AuthTemplate title="Register">
        <FormRegister />
        <p className="text-sm mt-5 text-center">
          Already have an account?{" "}
          <Link to="/login" className="font-bold text-blue-600">
            Login
          </Link>
        </p>
      </AuthTemplate>
    </form>
  );
};

export default RegisterPage;
