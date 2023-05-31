import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "../HomePage/HomePage";
import NavBar from "../../components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
import BlogPage from "../BlogPage/BlogPage";
import MetMuseum from "../MetMuseum/MetMuseum";
import ContactPage from "../ContactPage/ContactPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/metmuseum" element={<MetMuseum />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
