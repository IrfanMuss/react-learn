import logo from "./assets/image/logo.svg"; 
import "./App.css"; 
import Button from "./components/Elements/Button/Props";  // Import komponen Button yang telah didefinisikan dengan props
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="flex gap-x-3 justify-center items-center">
        <Button>Login</Button>  {/* Komponen Button dengan teks "Login" sebagai komponen children. */}
        <Button variant='bg-red-700'>Logout</Button>  {/* Komponen Button dengan teks "Logout" sebagai komponen children. dan properti variant untuk menentukan latar belakang merah dengan kelas CSS "bg-red-700". */}
      </div>
    </div>
  );
}

export default App;