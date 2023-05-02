//left off from tutotorial at 20:30
//https://www.youtube.com/watch?v=hYv6BM2fWd8


import  {useState, useEffect } from "react";
import { Container, Nav, Navbar, NavDropdown }  from 'react-bootstrap/Container';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/logo.svg';
import navIcon2 from '../assets/img/logo.svg';
import navIcon3 from '../assets/img/logo.svg';

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

    return() => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }


  <React.Fragment>
      <Navbar fixed="top" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">Eliot Gronstal's Portfolio Paragon</Navbar.Brand>
        <img src={logo} alt="logo" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <span className="navbar-toggler-icon"></span>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Action 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Action 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
                Separated Link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="#"><img src={navIcon1} alt="" /></a>
                <a href="#"><img src={navIcon2} alt="" /></a>
                <a href="#"><img src={navIcon3} alt="" /></a>
              </div>
              <button className="vvd" onClick={() => console.log ('connect')}><span>"We are all in this together." Let's connect.</span></button>
            </span>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    </React.Fragment>
}
