import React, { useRef } from "react";
import { Container } from "reactstrap";
import "./header.css";

const navLinks = [
    {
      display: "Home",
      url: "#",
    },
    {
      display: "About",
      url: "#",
    },
  
    {
      display: "Information",
      url: "#",
    },
    {
      display: "Client",
      url: "#",
    },
    {
      display: "Blog",
      url: "#",
    },
    {
      display: "Mission",
      url: "#",
    },
    {
      display: "Vision",
      url: "#",
    },
  ];
  
  const Header = () => {
    const menuRef = useRef();
  
    const menuToggle = () => menuRef.current.classList.toggle("active-menu");
  
    return (
      <header className="header">
        <Container>
          <div className="navigation d-flex align-items-center justify-content-between">
            <div className="logo">
              <h2 className=" d-flex align-items-center gap-1">
              <i class="ri-group-line"></i> Simple Website.
              </h2>
            </div>
  
            <div className="nav d-flex align-items-center gap-6">
              <div className="nav-menu" ref={menuRef} onClick={menuToggle}>
                <ul className="nav-list">
                  {navLinks.map((item, index) => (
                    <li key={index} className="nav-item">
                      <a href={item.url}>{item.display}</a>
                    </li>
                  ))}
                </ul>
              </div>
  
              <div className="nav-right">
                <p className="mb-0 d-flex align-items-center gap-2">
                <i class="ri-wifi-line"></i> <i class="ri-cellphone-line"></i> +63 9561234561
                </p>
              </div>
            </div>
  
            <div className="mobile-menu">
              <span>
                <i class="ri-menu-line" onClick={menuToggle}></i>
              </span>
            </div>
          </div>
        </Container>
      </header>
    );
  };

export default Header