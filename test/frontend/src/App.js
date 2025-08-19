import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import './App.css'; // Ensure you have a global stylesheet if needed
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <Header/>

        {/* Page Routing */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignInForm />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="footer">
          <p>&copy; 2025 Fitness Management. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
