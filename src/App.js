import './App.css';
import NewComponent from './NewComponent';
import Navbar from './NavBar';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar></Navbar>
        <h1>Mi primera aplicacion React</h1>
      </header>
      <NewComponent></NewComponent>
    </div>
  );
}

export default App;
