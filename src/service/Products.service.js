import axios from "axios";

// Fungsi untuk mendapatkan daftar produk
export const getProducts = (callback) => {
  // Mengirim GET request ke endpoint produk
  axios.get("https://fakestoreapi.com/products")
    .then((res) => {
      // Jika request berhasil, panggil callback dengan data produk dari respon
      callback(res.data);
    })
    .catch((err) => {
      // Jika request gagal, panggil callback dengan error
      callback(err);
    });
}
