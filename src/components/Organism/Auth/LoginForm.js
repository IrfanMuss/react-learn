import InputForm from "../../Molecules/Form/InputForm";
import Button from "../../Atoms/Button/Button";
import { forwardRef, useRef, useEffect } from "react";

const FormLogin = forwardRef(() => {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    window.location.href = "/products";
  };

  // referensi untuk elemen input email
  const emailRef = useRef(null);

  // Fokus otomatis pada input email setelah komponen dirender
  useEffect(() => {
    if (emailRef.current) {
      emailRef.current.focus(); // Set fokus pada input email
    }
  }, []); // Hanya dijalankan saat komponen pertama kali dirender

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        name="email"
        type="email"
        placeholder="Masukkan email atau username"
        ref={emailRef} // Menghubungkan ref dengan elemen input
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
