// import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <h1>Home</h1>
    <nav>
      <ul>
        <li><Link to="/tabs">Tabs Page</Link></li>
        <li><Link to="/folders">Folder Page</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  </div>
);

export default Home;
