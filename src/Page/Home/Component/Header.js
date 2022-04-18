import React, { useEffect } from 'react';
import { useState } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
// import './Header.scss'
export default () => {

  const [changeHeader, setChangeHeader] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', (event) => {
      let scrollTop = event.srcElement.body.scrollTop;
      if (scrollTop >= 160)
        setChangeHeader('change');
      else
        setChangeHeader('');
    })
  }, [])
  return (
    <header className={`${changeHeader}`}>
      <Navbar expand="lg" bg="light" fixed="top" className='outer-header-scroll'>
        <Container>
          <Navbar.Brand href={`${process.env.PUBLIC_URL}/`} >
            <img src={`${process.env.PUBLIC_URL}/logo.png`} class="logo-size without-scroll" alt="logo" title="logo" />
            <img src={`${process.env.PUBLIC_URL}/logo.png`} class="logo-size with-scroll" alt="logo" title="logo" data-qbcyl2xxl="" />
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="main-nav-1" />
          <Navbar.Collapse id="main-nav-1" style={{justifyContent: 'flex-end'}}>
            <Nav>
              <Nav.Link href={`${process.env.PUBLIC_URL}/contact-us/`}>
                Let's Talk
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <nav class="navbar navbar-expand-lg navbar-light fixed-top outer-header-scroll">
        <div class="container">
          <a class="navbar-brand" href={`${process.env.PUBLIC_URL}`}>
          </a>
          <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#main-nav-1" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <svg class="menu-toggle" xmlns="https://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><path stroke="rgba(0, 0, 0, 0.5)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M4 7h22M4 15h22M4 23h22"></path></svg>
          </button>
          <div class="navbar-collapse collapse main-new-header" id="main-nav-1">
            <ul class="navbar-nav ml-auto mainnav w-100 justify-content-end">

              <li class="nav-item">
                <a title="Contact Us" href={`${process.env.PUBLIC_URL}/contact-us/`} class="nav-link">Let's Talk</a> </li>
            </ul>
          </div>
        </div>
      </nav> */}
    </header>
  );
};
