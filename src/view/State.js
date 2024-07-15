import { useState } from "react";
import State from "../components/State";

function App() {
  // Menggunakan hook useState untuk mendefinisikan state getLink dan fungsi setLink untuk mengubah nilai state tersebut
  const [getLink, setLink] = useState("");

  // function ChangeLink untuk mengubah nilai state getLink menjadi "Link diubah"
  function ChangeLink(){
    setLink("Link diubah");
  };

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