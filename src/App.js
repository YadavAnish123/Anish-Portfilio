import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import About from './components/About';
import ContectMe from './components/ContectMe';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Family from './components/Family';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>

          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/project" element={<Projects/>}></Route>
          <Route exact path="/about" element={<About/>}></Route>
          <Route exact path="/contact" element={<ContectMe/>}></Route>
          <Route exact path="/Certificate" element={<Certificates/>}></Route>

          <Route exact path="/family" element={<Family/>}></Route> 

        </Routes>
        <Footer/>
      </div>
    </Router>




  );
}

export default App;
