import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const login = (data, callback) => {
  // Mengirim POST request ke API login dengan data login
  return axios.post("https://fakestoreapi.com/auth/login", data)
    .then((res) => {
      // Jika login berhasil, panggil callback dengan status true dan token dari respon
      callback(true, res.data.token);
    })
    .catch((err) => {
      // Jika login gagal, panggil callback dengan status false dan error
      callback(false, err);
    });
}

// Fungsi untuk mendapatkan nama pengguna dari token
export const getUsername = (token) => {
  // Dekode token JWT untuk mendapatkan payload
  const decoded = jwtDecode(token);
  // Mengembalikan nama pengguna dari payload token
  return decoded.user;
}
