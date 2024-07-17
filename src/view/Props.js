import './style.css'
import gambar from "../react.png";

// Membuat objek data yang menyimpan props title, imgUrl, dan imgSize
const data = {
  title: "Belajar Props",
  imgUrl: gambar,
  imgSize: 120,
};

// Membuat komponen Button yang menerima props
const Button = (props) => {
  return (
    // Button yang ketika diklik akan memanggil fungsi klik dari props
    <button onClick={() => props.klik()}>Props</button>
  );
};

export default function App() {
  // Fungsi yang akan dijalankan ketika button diklik
  const clicked = () => {
    return alert("Button Props"); // Menampilkan alert dengan pesan "ini Button Props"
  };

  return (
    <div className="box">
      <h3>Props</h3>
      <h4>{data.title}</h4> {/* Menampilkan props title dari objek data */}
      {/* Menampilkan gambar dari props imgUrl dan ukuran sesuai props imgSize dari objek data */}
      <img src={data.imgUrl} alt="react" style={{ width: data.imgSize }}></img>
      <br></br>
      {/* Menampilkan komponen Button dan mengirimkan fungsi clicked sebagai props */}
      <Button klik={clicked}></Button>
    </div>
  );
}
