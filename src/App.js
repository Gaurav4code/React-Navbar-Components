import "./styles.css";
import React from "react";

export default function App() {
  return (
    <Navbar>
      <DropLink link="Products" link1="Link1" link2="Link2" link3="Link3" />

      <NavbarLinks link="Services" />
      <NavbarLinks link="Join Us" />
      <NavItem link="Login" />
    </Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}
function DropLink(props) {
  return (
    <div className="dropdown">
      <button className="dropdown-btn">
        <div className="nav-links">
          <h2>
            {props.link}
            <i className="fas fa-caret-down" />
          </h2>
        </div>
      </button>
      <div className="dropdown-content">
        <a className="drop-item" href="#">
          {props.link1}
        </a>
        <a className="drop-item" href="#">
          {props.link2}
        </a>
        <a className="drop-item" href="#">
          {props.link3}
        </a>
      </div>
    </div>
  );
}
function NavbarLinks(props) {
  return (
    <>
      <div className="nav-links">
        <h2>{props.link}</h2>
      </div>
    </>
  );
}
function NavItem(props) {
  return (
    <li className="nav-item">
      <a href="#" className="icon-button">
        {props.link}
      </a>
    </li>
  );
}
