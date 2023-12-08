import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react"; // Import useState hook
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(true); // Initialize darkMode state

  return (
    <>
      <nav className={`navbar ${darkMode ? "dark-mode" : ""}`}>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <div className={darkMode ? "dark-mode" : ""}>
        <button
          className="toggle-button"
          onClick={() => setDarkMode(!darkMode)}
        >
          Toggle Dark Mode
        </button>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
