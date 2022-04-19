import React from 'react';
import { Col, Row, Container, Button } from 'react-bootstrap';

export default () => {
  return(
    <div className = 'home-page-top-row'>
      <Container >
        <Row>
          <Col sm={6}>
            <div className = 'home-page-top-left'>
              <h1 className = 'global-heading-h1'>
                <span>Creative</span> Web Design and <br></br> Development  <span>Company</span>
              </h1>
              <p className = 'mt-3 mb-3 mt-sm-3 mb-sm-3 mt-md-4 mt-lg-4 mt-xl-4 mb-md-5 mb-lg-5 mb-xl-5 pe-md-0 pe-lg-5 pe-xl-5'>
                Custom web development, UI/UX design, integrations, branding and digital marketing.
              </p>
              <p>
                <Button className="view-portfolio-btn">
                  View Portfolio
                </Button>
              </p>
            </div>
          </Col>
          <Col sm={6} className="custom-col-6">
            <div className = 'homepage-image-right mt-md-5 mt-lg-5 mt-xl-5 position-relative'>
              <img className= 'img-fluid' src={`${process.env.PUBLIC_URL}/uploads/home-page-image.jpg`} alt="Home page Image"/>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}