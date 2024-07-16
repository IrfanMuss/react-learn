import { useState } from "react";

function State({ gantiLink }) {
  return (
    <div className="p-4">
      <ul >
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">{!gantiLink ? "Contact" : gantiLink}</a>
        </li>
      </ul>
    </div>
  );
}

function App() {
  // Menggunakan hook useState untuk mendefinisikan state getLink dan fungsi setLink untuk mengubah nilai state tersebut
  const [getLink, setLink] = useState("");

  // function ChangeLink untuk mengubah nilaii state getLink menjadi "Link diubah"
  function ChangeLink() {
    setLink("Link diubah");
  }

  return (
    <div style={{ border: "2px solid black", padding: "1rem" }}>
      <h3>Ini State</h3>
      {/* Menggunakan komponen State dan mengirimkan state getLink sebagai prop gantiLink */}
      <State gantiLink={getLink} />
      {/* Button yang memanggil fungsi ChangeLink ketika diklik */}
      <button onClick={() => ChangeLink()}>Change Link</button>
    </div>
  );
}

export default App;
