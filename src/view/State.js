// Import useState dari React untuk menggunakan state hooks
import { useState } from "react";
import React from 'react';
import './style.css'

// Komponen State
function State({ gantiLink }) {
  return (
    <div className="p-4">
      <ul>
        <li>
          {/* Link untuk Home */}
          <a href="#">Home</a>
        </li>
        <li>
          {/* Link untuk About */}
          <a href="#">About</a>
        </li>
        <li>
          {/* Link untuk Contact yang dapat berubah berdasarkan nilai gantiLink */}
          <a href="#">{!gantiLink ? "Contact" : gantiLink}</a>
        </li>
      </ul>
    </div>
  );
}

// Komponen utama App
function App() {
  // Menggunakan hook useState untuk mendefinisikan state getLink dan fungsi setLink untuk mengubah nilai state tersebut
  const [getLink, setLink] = useState("");
  // Menggunakan hook useState untuk mendefinisikan state Angka dan fungsi setAngka untuk mengubah nilai state tersebut
  const [Angka, setAngka] = useState(0);

  // Fungsi ChangeLink untuk mengubah nilai state getLink menjadi "Link diubah"
  function ChangeLink() {
    setLink("Link diubah");
  }

  // Fungsi Tambah untuk menambah nilai state Angka sebesar 1
  function Tambah() {
    setAngka(Angka + 1);
  }

  return (
    <div className="box">
      <h3>State</h3>
      {/* Button yang memanggil fungsi Tambah ketika diklik dan menampilkan berapa kali button diklik */}
      <button onClick={() => Tambah()}>Di klik {Angka} Kali</button>
      {/* Menggunakan komponen State dan mengirimkan state getLink sebagai prop gantiLink */}
      <State gantiLink={getLink} />
      {/* Button yang memanggil fungsi ChangeLink ketika diklik */}
      <button onClick={() => ChangeLink()}>Change Link</button>
    </div>
  );
}

export default App;
