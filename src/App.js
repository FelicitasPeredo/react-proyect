import './App.css';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <ItemListContainer></ItemListContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
