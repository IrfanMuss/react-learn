import InputForm from "../../Molecules/Form/InputForm";
import Button from "../../Atoms/Button/Button";

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault()
    localStorage.setItem('email', event.target.email.value)
    localStorage.setItem('password', event.target.password.value)
    window.location.href ="/products"
  };
  return (
    <form onSubmit={handleLogin}>
      <InputForm
        name="email"
        type="email"
        placeholder="Masukkan email atau username"
      >
        Email atau Username
      </InputForm>
      <InputForm name="password" type="password" placeholder="*****">
        Password
      </InputForm>
      <Button type="submit" classname="bg-blue-700 w-full">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
