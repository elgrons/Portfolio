import  { React, useState, useEffect } from "react";
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router } from "react-router-dom";
import navIcon1 from '../assets/img/navlinkedIn.png';
import navIcon2 from '../assets/img/navgithubicon.svg';
import './App.css';

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
      <Navbar collapseOnSelect expand="md" fixed="top" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <span className="navbar-toggler-icon"></span>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#intro" className={activeLink === 'intro' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('intro')}>Intro</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
          </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/elgrons/"><img src={navIcon1} alt="LinkedIn nav icon" /></a>
                <a href="https://github.com/elgrons"><img src={navIcon2} alt="GitHub nav icon" /></a>
              </div>
              <a href="https://drive.google.com/file/d/14uvUUK1ksfT1rM6T1OH-gCanTz795G-e/view?usp=sharing">
              <button className="vvd" onClick={() => console.log ('resume')}><span>Review My Resume</span></button></a>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}