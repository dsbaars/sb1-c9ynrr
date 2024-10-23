import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NostrProvider } from './context/NostrContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';

function App() {
  return (
    <Router>
      <NostrProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/property/:id" element={<PropertyDetails />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </NostrProvider>
    </Router>
  );
}

export default App;