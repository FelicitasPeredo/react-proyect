import './App.css';
import Navbar from './components/NavBar';
// import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      {/* <ItemListContainer></ItemListContainer> */}
      <ItemDetailContainer></ItemDetailContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
