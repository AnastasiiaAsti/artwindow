import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "../HomePage";
import NavBar from "../../components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
import AboutPage from "../AboutPage";
import MetMuseum from "../MetMuseum/MetMuseum";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/metmuseum" element={<MetMuseum />} />
      </Routes>
    </div>
  );
}

export default App;
