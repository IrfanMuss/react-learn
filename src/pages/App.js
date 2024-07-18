import logo from '../assets/image/logo.svg';
import './App.css';
import Props from '../components/Props'
import State from '../components/State'
import './style.css'
import Context from '../components/Context'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
        <Props className="box"></Props>
        <State className="box"></State>
        <Context className="box"></Context>
    </div>
  );
}

export default App;
