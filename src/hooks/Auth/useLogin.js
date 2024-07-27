import { useEffect, useState } from "react";
import { getUsername } from "../../service/Auth.service";

export const useLogin = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Mengambil token dari localStorage
    const token = localStorage.getItem("token");

    // Jika token ada, ambil nama pengguna dan set ke state 'username'
    if (token) {
      setUsername(getUsername(token));
    } else {
      // Jika token tidak ada, alihkan pengguna ke halaman login
      window.location.href = "/login";
    }
  }, []);

  return username;
};
