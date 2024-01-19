import Card from "./components/Card";
import { Carousel } from "./components/Carousel";
import { Footer } from "./components/Footer";
import NavBar from "./components/Nav_bar";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App" style={{fontFamily: 'Poppins',}}>
      <NavBar />
      <Carousel/>
      <Card/> 
      <Footer/>
    </div>
  );
}

export default App;
