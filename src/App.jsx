import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';

function App() {

  return (
    <div className="App">
      <Layout />

      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        {/* useParams} */}
        <Route path="/portfolio:id" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage /> } />
      </Routes>
    </div>
  );
}

export default App;
