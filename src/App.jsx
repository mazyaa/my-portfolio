import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  
import Navbar from './components/Navbar';
import About from "./components/About";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Experiences from './components/Experiences';
import Footer from './components/Footer';

function App() {
  return(
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Experience" element={<Experiences />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App
