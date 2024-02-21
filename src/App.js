import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cakes from "./pages/Cakes";
import CakeDisplay from "./pages/CakeDisplay";
import WeddingCakes from "./pages/WeddingCakes";
import CupCakes from "./pages/CupCakes";
import Cookies from "./pages/Cookies";
import WeddingCakeDisplay from "./pages/WeddingCakeDisplay";
import CupCakeDisplay from "./pages/CupCakeDisplay";
import CookieDisplay from "./pages/CookieDisplay";
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
          {/* Make sure to differentiate the routes */}
          <Route path="/Just-Cake/weddingcake/:id" element={<WeddingCakeDisplay />} />
          <Route path="/Just-Cake/cupcake/:id" element={<CupCakeDisplay />} />
          <Route path="/Just-Cake/cookie/:id" element={<CookieDisplay />} />
          <Route path="/Just-Cake/cake/:id" element={<CakeDisplay />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
