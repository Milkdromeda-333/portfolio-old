import { Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage"
import PortfolioPage from "./pages/PortfolioPage"
import ContactPage from "./pages/ContactPage"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="App">
      
      {/* this is containered so to add a background image */}
      <div className="body">
        <HomePage />
        <PortfolioPage />
        <ContactPage />
      </div>
      
      <Footer />

      <Routes>
        <Route path='/portfolio' />
        <Route path='/portfolio/:id' />
      </Routes>
      
    </div>
  );
}

export default App;
