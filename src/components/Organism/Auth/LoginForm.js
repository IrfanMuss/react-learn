import InputForm from "../../Molecules/Form/InputForm";
import Button from "../../Atoms/Button/Button";
import { forwardRef, useRef, useEffect } from "react";

const FormLogin = forwardRef(() => {
  const handleLogin = (event) => {
    event.preventDefault()
    localStorage.setItem('email', event.target.email.value)
    localStorage.setItem('password', event.target.password.value)
    window.location.href ="/products"
  };

  const emailRef = useRef(null);

  useEffect (() => {
    console.log(emailRef)
    emailRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        name="email"
        type="email"
        placeholder="Masukkan email atau username"
        ref={emailRef}
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
});

export default FormLogin;
