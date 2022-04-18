import React from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'
import Slider from 'react-slick/lib/slider'

export default () => {
  const settings = {
    dots: true,
    dotsClass: 'slick-dotted',
    slidesPerRow: 2,
    draggable: true,
  }
  return (
    <div className="home-our-showcase-section homepage-showcase">
      <Container>
        <Col sm={12} className="text-center showcase-heading">
          <span>OUR SHOWCASE</span>
          <h2>Some of our finest &amp; recent work</h2>
        </Col>
        <Row>
          <Col sm={6} className="pull-left pe-md-5">
            <img
              src={`${process.env.PUBLIC_URL}/uploads/gif-video-img.jpg`}
              className="img-fluid"
              alt="gif-video-img"
            />
          </Col>
          <Col sm={6} className="case-study pull-right ps-md-4">
            <h3>Jewelry Web Design &amp; Development</h3>
            <p>
              We made a website with a completely operational e-commerce CMS,
              with a custom theme to coordinate our customer's vision. Our
              UI/UX designers made the website with the end goal that it had a
              trendy design, clean format, simple interfaces, and limitless
              customization.
            </p>
            <Button className="btn-readcase" tabIndex={0}
              href={`${process.env.PUBLIC_URL}/portfolio/diamond-jewelry-ecommerce-chicago/`}>
              Read Case Study
            </Button>
            <Row mt={4} className="monthy-wise-visit">
              <Col sm={3} className="monthy-wise-left pull-left">
                <label>28%</label>
                <p>ROI Increase</p>
              </Col>
              <Col sm={6} className="monthy-wise-right pull-right">
                <label>18k</label>
                <p>Monthly Website Visits</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
