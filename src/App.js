import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Cakes";
import CakeDisplay from "./pages/CakeDisplay";


function App() {
  return (
<div className="App">
      <Router>
        {/* Navbar component to provide navigation */}
        <Navbar />
        <Routes>
          {/* Route for the Home page */}
          <Route path="/Just-Cake" element={<Home />} />
          {/* Route for the Projects page */}
          <Route path="/Just-Cake/projects" element={<Projects />} />
          {/* Route for displaying individual project details */}
          <Route
            path="/Personal-Website/project/:id"
            element={<CakeDisplay />}
          />
        </Routes>
        {/* Footer component to provide footer information */}
        <Footer />
      </Router>
    </div>
  )
}

export default App;
