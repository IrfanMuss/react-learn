import { Link } from "react-router-dom";

const AuthTemplate = (props) => {
  const { children, title } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, please enter your credentials
        </p>
        <form action="">{children}</form>
        {/* Conditional Rendering */}
        <p className="text-sm text-center mt-3">
          {title === "Login" ? (
            <>
              Don't have an account?{" "}
              <Link to="/register" className="font-bold text-blue-600">
                Sign Up
              </Link>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <Link to="/login" className="font-bold text-blue-600">
                Login
              </Link>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthTemplate;
