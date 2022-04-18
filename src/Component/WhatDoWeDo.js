import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
// import './WhatDoWeDo.scss'

export default () => {
  return (
    <div className='what-do-we-do-section'>
      <div className="container">
        <Container>
          <Row>
            <Col sm={4}>
              <div className="home-what-we-do-left">
                <span>WHAT WE DO</span><p></p>
                <h2>Website Design Agency</h2>
                <p>A decade ago, we started with a small team of web designers &amp; scaled up to a full-service digital agency that specializes in marketing, branding, software development, web design and development. Focusing on innovative and web-driven solutions. We build digital experiences that are client-centered &amp; long-lasting.</p>
                <p>
                  <Button className="btn-discover-more" href="${process.env.PUBLIC_URL}/company/">
                    Discover more
                  </Button>
                </p></div>
            </Col>
            <Col sm={8}>
              <div className="home-what-we-do-right mt-md-5 md-lg-5 md-xl-5">
                <Row>
                  <Col sm={6}>
                    <div className="home-what-we-do-right-inner mb-md-5 mb-lg-5 mb-xl-5 mt-3 mt-sm-0 mt-md-0">
                      <span className="gbl-spirit ui-ux-icon"></span><p></p>
                      <h3>UI/UX</h3>
                      <p>Being a web design agency, we specialize in building flawless web designs, providing an interactive UI. We create user-friendly web and mobile app interfaces. Get the benefit of our specialized functionalities and visual elements.</p>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div className="home-what-we-do-right-inner mb-md-5 mb-lg-5 mb-xl-5">
                      <span className="gbl-spirit dev-icon"></span><p></p>
                      <h3>DEVELOPMENT</h3>
                      <p>We build clean &amp; customized websites  &amp; apps to create a lasting impression both visually and interactively. Build a responsive, eye-catching, &amp; mobile-friendly website that will attract your visitors.</p>
                    </div>
                  </Col>

                  <Col sm={6}>
                    <div className="home-what-we-do-right-inner mb-md-5 mb-lg-5 mb-xl-5">
                      <span className="gbl-spirit marketing-icon"></span><p></p>
                      <h3>MARKETING</h3>
                      <p>Ensuring to help you build a brand that elevates your brand’s presence, and increase brand exposure with custom strategy, channel expertise, and impeccable execution.</p>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div className="home-what-we-do-right-inner mb-md-5 mb-lg-5 mb-xl-5">
                      <span className="gbl-spirit ecom-icon"></span><p></p>
                      <h3>e-Commerce</h3>
                      <p>We take a focused approach to build &amp; execute the online store that helps you boost online engagement. We make an e-commerce website that will help you increase online sales &amp; services.</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div >
  )
}