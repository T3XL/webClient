import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from "./api/home.js"
import Experimentitems from './api/experimentitems.js';
import Search from './api/courseSearch.js';
import AddCourse from './api/addCourse.js';
import Delete from './api/delete.js';
import './App.css';
function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/delete">Delete</Link>
            </li>
            <li>
              <Link to="/addCourse">Add & Update</Link>
            </li>
            <li>
              <Link to="/search">search Course</Link>
            </li>
            <li>
              <Link to="/experimentitems">Experiment Items</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experimentitems" element={<Experimentitems />} />
          <Route path="/search" element={<Search />} />
          <Route path="/addCourse" element={<AddCourse />} />
          <Route path="/delete" element={<Delete />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
