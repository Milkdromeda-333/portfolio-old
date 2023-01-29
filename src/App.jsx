import { Routes, Route } from 'react-router-dom';
import Intro from "./components/Intro"
import PortfolioPage from "./pages/PortfolioPage"
import ContactPage from "./pages/ContactPage"
import Footer from "./components/Footer"
import FloatingNav from './components/FloatingNav';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Hero />
      {/* this is containered so to add a background image */}
      <div className="body">
        <Intro />
        <PortfolioPage />
        <ContactPage />
        <FloatingNav />
      </div>
      <Footer />
    </div>
  );
}

export default App;
