// Komponen Marqu menerima props dan menampilkan teks yang diberikan dalam tag <marquee>
const Marqu = (props) => {
  return (
    <div>
      <marquee>{props.text}</marquee>
    </div>
  );
};

// Komponen Button menerima props dan membuat tombol yang memanggil fungsi ketika diklik
const Button = (props) => {
  return (
    <div>
      <button onClick={() => props.klik()}>Button Props</button> {/* Tombol yang memanggil props.klik saat diklik */}
    </div>
  );
};

// Komponen utama App
function App() {
  // membuat variable text berisi Teks yang akan ditampilkan dalam komponen Marqu
  const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

  // function clicked yang akan dipanggil saat tombol diklik
  function clicked() {
    return alert("ini Button Props"); // Menampilkan alert ketika tombol diklik
  }

  return (
    <div style={{ border: "2px solid black", padding: "1rem" }}>
      <h3>Ini Props</h3>
      <Marqu text={text}></Marqu> {/* Menggunakan komponen Marqu dan mengirimkan text sebagai prop */}
      <Button klik={clicked}></Button> {/* Menggunakan komponen Button dan mengirimkan fungsi clicked sebagai prop */}
    </div>
  );
}

export default App;