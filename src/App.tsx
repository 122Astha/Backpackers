import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import TreksList from './pages/TreksList';
import TrekDetail from './pages/TrekDetail';
import Contact from './pages/Contact';
import ScrollToTop from './components/common/ScrollToTop';
import './App.css';

function App() {
  return (
    <Router basename="/">
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/treks" element={<TreksList />} />
            <Route path="/treks/:id" element={<TrekDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;