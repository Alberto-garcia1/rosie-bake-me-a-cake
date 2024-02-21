import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cakes from "./pages/Cakes";
import WeddingCakes from "./pages/WeddingCakes";
import CupCakes from "./pages/CupCakes";
import Cookies from "./pages/Cookies";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        {/* Navbar component to provide navigation */}
        <Navbar />
        <Routes>
          <Route path="/Just-Cake" element={<Home />} />
          <Route path="/Just-Cake/cakes" element={<Cakes />} />
          <Route path="/Just-Cake/weddingcakes" element={<WeddingCakes />} />
          <Route path="/Just-Cake/cupcakes" element={<CupCakes />} />
          <Route path="/Just-Cake/cookies" element={<Cookies />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
