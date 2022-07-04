import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Welcome from './components/Welcome';
import Contador from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';




function App() {

  return (
    <div className="App">
      <Navbar>

      </Navbar>
      <ItemListContainer/>
      
      

      {/* <Welcome name="Martin" /> */}
      <Body />
    </div>

  );
}

export default App;
