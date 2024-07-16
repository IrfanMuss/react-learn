import { useState } from "react";
// komponen State sebagai function yang menerima prop gantiLink
function State({ gantiLink }) {
  return (
    <div>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">
            {/* Jika gantiLink kosong, tampilkan "Contact", jika tidak, tampilkan nilai gantiLink */}
            {!gantiLink ? "Contact" : gantiLink}
          </a>
        </li>
      </ul>
    </div>
  );
}

function App() {
  // Menggunakan hook useState untuk mendefinisikan state getLink dan fungsi setLink untuk mengubah nilai state tersebut
  const [getLink, setLink] = useState("");

  // function ChangeLink untuk mengubah nilai state getLink menjadi "Link diubah"
  function ChangeLink() {
    setLink("Link diubah");
  }

  return (
    <div>
      <h2>Ini State</h2>
      {/* Menggunakan komponen State dan mengirimkan state getLink sebagai prop gantiLink */}
      <State gantiLink={getLink} />
      {/* Button yang memanggil fungsi ChangeLink ketika diklik */}
      <button onClick={() => ChangeLink()}>Click Me😜</button>
    </div>
  );
}

export default App;
