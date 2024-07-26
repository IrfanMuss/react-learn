import InputForm from "../../Molecules/Form/InputForm";
import Button from "../../Atoms/Button/Button";
import { forwardRef, useRef, useEffect } from "react";
import { login } from "../../../service/Auth.service";
import { useState } from "react";

const FormLogin = forwardRef(() => {
  const [LoginFailed, setLoginFailed] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();

    // Mengambil data dari form input
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    // Memanggil fungsi login dengan data dan callback
    login(data, (status, res) => {
      if (status) {
        // Jika login berhasil, simpan token ke localStorage dan alihkan ke halaman produk
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        // Jika login gagal, set pesan kesalahan ke state
        setLoginFailed(res.response.data);
      }
    });
  };

  // referensi untuk elemen input email
  const usernameRef = useRef(null);

  // Fokus otomatis pada input email setelah komponen dirender
  useEffect(() => {
    if (usernameRef.current) {
      usernameRef.current.focus(); // Set fokus pada input email
    }
  }, []); // Hanya dijalankan saat komponen pertama kali dirender

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        name="username"
        type="text"
        placeholder="John Doe"
        ref={usernameRef} // Menghubungkan ref dengan elemen input
      >
        Username
      </InputForm>
      <InputForm name="password" type="password" placeholder="*****">
        Password
      </InputForm>
      <Button type="submit" classname="bg-blue-700 w-full">
        Login
      </Button>
      {/* Menampilkan pesan kesalahan login jika ada */}
      {LoginFailed && <p className="text-red-500 text-center">{LoginFailed}</p>}
    </form>
  );
});

export default FormLogin;
