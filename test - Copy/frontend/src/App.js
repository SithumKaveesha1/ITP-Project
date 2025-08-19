import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';
import Dashboard from './components/Dashboard';  // Import the Dashboard component
import './App.css';  // Import the CSS file for styling

function App() {
  return (
    <Router>
      <div className="App">
        <header className="app-header">
          <nav>
            <ul className="nav-links">
              <li>
                <Link to="/signin" className="nav-link">Sign In</Link>
              </li>
              <li>
                <Link to="/signup" className="nav-link">Sign Up</Link>
              </li>
              <li>
                <Link to="/dashboard" className="nav-link">Dashboard</Link> {/* Add Dashboard link */}
              </li>
            </ul>
          </nav>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/signin" element={<SignInForm />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/dashboard" element={<Dashboard />} /> {/* Route to Dashboard */}
            <Route exact path="/" element={<h1>Welcome to the Gym System</h1>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
