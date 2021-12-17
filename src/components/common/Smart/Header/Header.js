import React from 'react'
import { Navbar,Nav,NavDropdown, Container } from 'react-bootstrap'
import './Header.css';
import icon1 from '../../../../images/searchicon.png'
import icon2 from '../../../../images/setting.png'

const Header = () => {
    return (
        <Navbar className="navhead" bg="dark" variant="dark">
        <Navbar.Brand href="#home">STARZPLAY</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="navlinkr" href="#features">MOVIES</Nav.Link>
            <Nav.Link className="navlinkr" href="#pricing">TV SHOWS</Nav.Link>
            <Nav.Link className="navlinkr" href="#pricing">ARABIC</Nav.Link>
            <Nav.Link className="navlinkr" href="#pricing">KIDS</Nav.Link>
            <NavDropdown className="navdropdn" title="CHANNELS" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link className="navlinkr" href="#deets"> <img style={{width:"20px" , height:"20px" , objectFit:"cover"}} src={icon1}  alt="img" /></Nav.Link>
            <Nav.Link className="navlinkr" eventKey={2} href="#memes">
            <img style={{width:"20px" , height:"20px" , objectFit:"cover"}} src={icon2}  alt="img" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default Header
