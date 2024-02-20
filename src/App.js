import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cakes from "./pages/Cakes"; // Import the Cakes component
import CakeDisplay from "./pages/CakeDisplay";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <Router>
        {/* Navbar component to provide navigation */}
        <Navbar />
        <Routes>
          {/* Route for the Home page */}
          <Route path="/Just-Cake" element={<Home />} />
          {/* Route for the Cakes page */}
          <Route path="/Just-Cake/cakes" element={<Cakes />} />
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
  );
}

export default App;
