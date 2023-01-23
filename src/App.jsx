import { Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage"
import PortfolioPage from "./pages/PortfolioPage"
import ContactPage from "./pages/ContactPage"

function App() {

  return (
    <div className="App">
      
      <HomePage />
      <PortfolioPage />
      <ContactPage />
      {/* <Footer /> */}

      <Routes>
        <Route path='/portfolio' />
        <Route path='/portfolio/:id' />
      </Routes>
      
    </div>
  );
}

export default App;
