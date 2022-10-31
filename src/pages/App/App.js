import './App.css';
import HomePage from "../HomePage";
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import { Routes, Route } from 'react-router-dom';
import AboutPage from '../AboutPage';
import ContactPage from '../ContactPage';
import ElementsPage from '../ElementsPage';
import Pages from '../Pages';
import PortfolioPage from '../PortfolioPage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contacts" element={<ContactPage />} />
        <Route path="/elements" element={<ElementsPage />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
