import { Link } from "react-router-dom";
import { useState, React, useEffect } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [matches, setMatches] = useState(window.matchMedia("(max-width: 1072px)").matches);

  useEffect(() => {
    window.matchMedia("(max-width: 1072px)").addEventListener("change", e => setMatches(e.matches));
  }, []);
  return (
    <nav>
      <div className="site-title">
        <Link to="/poems">
          {matches && <h1><i className="fas fa-pen-fancy"></i></h1>}
          {!matches && <h1>Poem Pad</h1>}
        </Link>
        <p>~ Poetry is the clear expression of mixed feelings...</p>
      </div>
      <ul style={{ display: menu ? "none" : "flex" }}>
        <li>
          <Link to="/poems">Poems</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/create">Write Poem</Link>
        </li>
      </ul>
      <button
        className="menu-toggle"
        onClick={() => {
          menu ? setMenu(false) : setMenu(true);
        } }
      >
          <i className={menu ? "fas fa-list" : "fas fa-times"}></i>
        </button>
    </nav>
  );
};

export default Navbar;
