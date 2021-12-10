import "./styles.css";

import React from "react";

export default function App() {
  return (
    <>
      {/*BLUE */}
      <Navbar>
        <div className="panel">
          <div>
            <Logo link="LOGO" />
          </div>
          <div className="navbar-links">
            <ul>
              <DropLink
                link="PRODUCTS"
                link1="Link1"
                link2="Link2"
                link3="Link3"
              />

              <NavbarLinks link="OUR-WORKS" />
              <NavbarLinks link="SERVICES " />
              <NavbarLinks link="JOIN US " />
            </ul>
          </div>
          <div className="bar-btn">
            <NavItem link="LOGIN" />
            <NavItem link="SIGN UP" />
          </div>
        </div>
      </Navbar>

      <br />
      <br />
      <br />

      {/* <Navbar>
        <div className="panel">
          <div>
            <Logo link="LOGO" />
          </div>

          <div className="navbar-links">
            <DropLink
              link="PRODUCTS"
              link1="Link1"
              link2="Link2"
              link3="Link3"
            />
            <DropLink
              link="PRODUCTS"
              link1="Link1"
              link2="Link2"
              link3="Link3"
            />

            <NavbarLinks link="OUR-WORKS" />
            <NavbarLinks link="SERVICES " />
            <NavbarLinks link="JOIN US " />
          </div>
          <div className="bar-btn">
            <NavItem link="LOGIN" />
            <NavItem link="SIGN UP" />
          </div>
        </div>
      </Navbar> */}
    </>
  );
}

function Logo(props) {
  return (
    <div className="logo">
      <h2>{props.link}</h2>
      {/* <img className="logo-img" alt="logo" /> */}
    </div>
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
      <div className="nav-links">
        <button className="dropdown-btn">
          <div className="drop-link">
            <h2>{props.link}</h2>
            <i className="fas fa-caret-down" />
          </div>
        </button>
      </div>

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
        <ul className="nav">
          <li>{props.link}</li>
        </ul>
      </div>
    </>
  );
}
function NavItem(props) {
  return (
    <li className="buttons">
      <button class="btn-hover color-1">{props.link}</button>
      {/* <a href="#" className="icon-button"> 
        {props.link}
  </a>*/}
    </li>
  );
}
