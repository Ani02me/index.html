import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  return (
    <nav style={{ display: "flex", gap: "20px", padding: "10px", borderBottom: "1px solid #ccc" }}>
      <Link to="/profile" style={{ fontWeight: location.pathname === "/profile" ? "bold" : "normal" }}>My Profile</Link>
      <Link to="/projects" style={{ fontWeight: location.pathname === "/projects" ? "bold" : "normal" }}>My Projects</Link>
      <Link to="/about" style={{ fontWeight: location.pathname === "/about" ? "bold" : "normal" }}>About Me</Link>
    </nav>
  );
};

const Profile = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>My Profile</h2>
      <p>Name: Your Name</p>
      <p>Email: your.email@example.com</p>
      <p>Academy: Your Academy</p>
      <button onClick={() => navigate("/projects")}>
        Go to My Projects
      </button>
    </div>
  );
};

const Projects = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>My Projects</h2>
      <ul>
        <li><strong>Project 1:</strong> Description 1</li>
        <li><strong>Project 2:</strong> Description 2</li>
        <li><strong>Project 3:</strong> Description 3</li>
      </ul>
      <button onClick={() => navigate("/about")}>
        Go to About Me
      </button>
    </div>
  );
};

const AboutMe = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>About Me</h2>
      <p>This is a short description about myself.</p>
      <button onClick={() => navigate("/profile")}>
        Go to My Profile
      </button>
    </div>
  );
};

const NotFound = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate("/about", { replace: true });
  }, [navigate]);
  return null;
};

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
