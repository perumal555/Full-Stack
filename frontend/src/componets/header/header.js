import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './header.css'
import { FaCartShopping } from "react-icons/fa6";
import { RxAvatar } from "react-icons/rx";
import { FaLock } from "react-icons/fa6";
import { MdOutlineCreditCard } from "react-icons/md";

const Header = () => {
  return (
    <>

    <div className='header'>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container >
          <h2>SMILE @24 SHOP  </h2>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/shop">Shop</Nav.Link>
              <Nav.Link href="/shopdetail">ShopDetail</Nav.Link>
              <NavDropdown title="page" id="basic-nav-dropdown">
                <NavDropdown.Item href="/cart">Cart <FaCartShopping /></NavDropdown.Item>
                <NavDropdown.Item href="/viewcart">
                  ViewCart <MdOutlineCreditCard />
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/signin" style={{color:'rgb(14, 233, 14)'}}> <FaLock/> </Nav.Link>
              <Nav.Link href="/login" style={{color:'rgb(14, 233, 14)'}}><RxAvatar /> </Nav.Link>             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>

    </>
  );
}

export default Header
