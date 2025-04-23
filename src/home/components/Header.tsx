
import React, { useState } from 'react';
import logo from '../../assets/images/LOGO.png'; 
import { Container, Collapse, Button } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="pt-5 py-3">
      <Container>
        <div className="d-flex justify-content-between align-items-center">
          <div className="logo d-flex align-items-center">
            <img src={logo} alt="SMARTX" height={40} />
          </div>

          <div className="d-none d-md-flex flex-grow-1 justify-content-center">
            <nav>
              <ul className="d-flex header-menus gap-4 list-unstyled mb-0">
                <li><a href="#" className="active">Home</a></li>
                <li><a href="#" className="">Service</a></li>
                <li><a href="#" className="">Resources</a></li>
                <li><a href="#" className="">Support</a></li>
                <li><a href="#" className="">About</a></li>
              </ul>
            </nav>
          </div>


          <div className="d-none header-btn d-md-flex align-items-center gap-2">
            <a href="#" className="">Sign In</a>
            <Button variant="dark" className="px-3">Try For Free</Button>
          </div>

        
          <div className="d-md-none">
            <Button variant="link" onClick={() => setOpen(!open)} aria-controls="mobile-menu" aria-expanded={open}>
              <FaBars size={24} />
            </Button>
          </div>
        </div>

        <Collapse in={open}>
          <div id="mobile-menu" className="mt-3 d-md-none">
            <ul className="list-unstyled">
              <li><a href="#" className="d-block py-2">Home</a></li>
              <li><a href="#" className="d-block py-2">Service</a></li>
              <li><a href="#" className="d-block py-2">Resources</a></li>
              <li><a href="#" className="d-block py-2">Support</a></li>
              <li><a href="#" className="d-block py-2">About</a></li>
              <li className="mt-3">
                <a href="#" className="btn btn-outline-dark w-100 mb-2">Sign In</a>
                <Button variant="dark" className="w-100">Try For Free</Button>
              </li>
            </ul>
          </div>
        </Collapse>
      </Container>
    </header>
  );
};

export default Header;
