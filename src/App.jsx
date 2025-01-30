import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  
import Navbar from './components/navbar';
import About from "./components/About";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Experience from "./components/experience";
import Footer from './components/footer';

function App() {
  return(
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App
