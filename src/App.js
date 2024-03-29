import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cakes from "./pages/Cakes";
import WeddingCakes from "./pages/WeddingCakes";
import CupCakes from "./pages/CupCakes";
import SugarCookies from "./pages/SugarCookies";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        {/* Navbar component to provide navigation */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cakes" element={<Cakes />} />
          <Route path="/weddingcakes" element={<WeddingCakes />} />
          <Route path="/cupcakes" element={<CupCakes />} />
          <Route path="/sugarcookies" element={<SugarCookies />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
