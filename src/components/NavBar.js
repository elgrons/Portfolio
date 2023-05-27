import  { React, useState, useEffect } from "react";
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router } from "react-router-dom";
// import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/navlinkedIn.png';
import navIcon2 from '../assets/img/navgithub.png';
// import navIcon3 from '../assets/img/logo.svg';
// import './App.css';
// import { HashLink } from 'react-router-hash-link';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar fixed="top" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">Eliot Gronstal's Dev Portfolio</Navbar.Brand>
        {/* <img src={logo} alt="logo" /> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <span className="navbar-toggler-icon"></span>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#intro" className={activeLink === 'intro' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('intro')}>Intro</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            <Nav.Link href="#Resume" className={activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('resume')}>Resume</Nav.Link>
          </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/elgrons/"><img src={navIcon1} alt="LinkedIn nav icon" /></a>
                <a href="https://github.com/elgrons"><img src={navIcon2} alt="GitHub nav icon" /></a>
              </div>
              <button className="vvd" onClick={() => console.log ('connect')}><span>"We are all in this together." Let's connect.</span></button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}