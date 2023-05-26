import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "../HomePage";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import AboutPage from "../AboutPage";
import LouvreMuseum from "../LouvreMuseum/LouvreMuseum";
import MetMuseum from "../MetMuseum/MetMuseum";
import PortfolioPage from "../PortfolioPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/louvremuseum" element={<LouvreMuseum />} />
        <Route path="/metmuseum" element={<MetMuseum />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </div>
  );
}

export default App;
