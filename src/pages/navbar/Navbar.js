import React from "react";
import './navbar.css';
import contact from "../contact/Contact";
import home from "../home/home";
import About from "../aboutus/About";
import Service from "../service/Service";
import Test from "../testmonnai/Testmonnais";
import { NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import{ Container } from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap'
import { Nav } from "react-bootstrap";
import 'react-slideshow-image/dist/styles.css'
const navbar=()=>{
    return(
       
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home" className="title">Anoha academy</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features"></Nav.Link>
      <Nav.Link href="#pricing"></Nav.Link>
    </Nav>
    <Nav className="menu">
      <Nav.Link href="home"  className="menu" >Home</Nav.Link>
      <Nav.Link  href="About" className="menu"> About us </Nav.Link>
      <Nav.Link  href="Service" className="menu">Service </Nav.Link>
      <Nav.Link  href="Contact" className="menu">Contact </Nav.Link>

    </Nav>
  </Navbar.Collapse>
  </Container> 
</Navbar>
            

       )
}
export default navbar;