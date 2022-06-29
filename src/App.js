import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Welcome from './components/Welcome';
import CartWidget from './components/CartWidget';




function App() {

  return (
    <div className="App">
      <Navbar>

      </Navbar>

      {/* <Welcome name="Martin" /> */}
      <Body />
    </div>

  );
}

export default App;
