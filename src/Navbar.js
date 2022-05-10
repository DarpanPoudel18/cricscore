import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Live from "./Components/Live";
import Result from "./Components/Result";
import Upcoming from "./Components/Upcoming";
import Series from "./Components/Series";
import Scoreboard from "./Components/Scoreboard";
import Gallery from "./Components2/Gallery";
import Videos from "./Components2/Videos";
import Teams from "./Components2/Teams";
 

const Navbar = () => {
  return (
    <div>
      <div className="nav-header bg-white">
  <nav className="p-2 text-white nav-header-child">
    <ul className="nav justify-content-center">
  <li class="nav-item">
    <Link className="nav-link live" to="Live">Live</Link> 
  </li>
  <li class="nav-item">
    <Link className="nav-link upcoming" to="Upcoming">Upcoming</Link>
  </li>
  <li class="nav-item">
    <Link className="nav-link result" to="Result">Result</Link>
  </li>
  <li class="nav-item">
    <Link className="nav-link result" to="Series">Series</Link>
  </li>
  
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    More
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><Link className="dropdown-item" to="Gallery">Gallery</Link></li>
    <li><Link className="dropdown-item" to="Videos">Videos</Link></li>
    <li><Link className="dropdown-item" to="Teams">Teams</Link></li>
  </ul>
</ul>

        </nav>
      </div>

      <Routes>
        <Route path="/live" element={<Live />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/result" element={<Result />} />
        <Route path="/series" element={<Series />} />
        {/* <Route path="/live/:id" element={<Scoreboard />} /> */}
        <Route path="/scoreboard/:id" element={<Scoreboard />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/teams" element={<Teams />} />
      </Routes>
    </div>
  );
};

export default Navbar;
