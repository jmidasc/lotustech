import React from 'react'
import Slider from 'react-slick/lib/slider'
import { Container, Col, Row } from 'react-bootstrap'

export default () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="home-testimonial-section">
      <Container>
        <Row>
          <Col sm={6} md={6} lg={5} xl={5} className="homepage-testimonial">
            <span>TESTIMONIALS</span>
            <h2>
              What clients say about <br />
              <span className="purple-color">Keyideas</span>
            </h2>
            <Slider className="testimonial-review" {...settings}>
              <div>
                {/* <!--<div className="testimonial-rating">5 / 5</div>--> */}
                <div className="testimonial-rating">5 / 5</div>
                <p></p>
                <p>
                  We were very pleased with the overall development process that
                  was followed. Keyideas seems to be a world class provider from
                  what we experienced on our first project from the very
                  beginning like scoping out the project requirement, design
                  &amp; development, QA &amp; testing phase and finally to
                  migration to our location. I would not hesitate to recommend
                  them as a superior development house.
                </p>
                <p></p>
                <div className="author">
                  Isaac Gottesman<span>dimendSCAASI, Chicago USA</span>
                </div>
              </div>
              <div>
                {/* <!--<div className="testimonial-rating">5 / 5</div>--> */}
                <div className="testimonial-rating">5 / 5</div>
                <p></p>
                <p>
                  I had an amazing experience working with Keyideas an excellent
                  team of developers. I’m pleased with their service and
                  commitment. The CRM application they developed, far exceeded
                  my expectations. Project was built from scratch and during the
                  project the team worked diligently and provided instant
                  solutions to any problems. They proved that working with them,
                  was a right decision.
                </p>
                <p></p>
                <div className="author">
                  Mordy Karsch
                  <span>Giving Back Promotions, San Francisco, CA</span>
                </div>
              </div>
            </Slider>
          </Col>
          <Col sm={6} md={6} lg={6} xl={6} className="offset-lg-1">
            <div className="clients-logo client-logo-spirits">
              <div className="logo-div capgemini"></div>
              <div className="logo-div ace-pro opacity-20"></div>
              <div className="logo-div apache"></div>
              <div className="logo-div critical-control"></div>
              <div className="logo-div barkev"></div>
              <div className="logo-div vestas"></div>
              <div className="logo-div dimenscassi"></div>
              <div className="logo-div mindtree"></div>
              <div className="logo-div hackensack"></div>
              <div className="logo-div rcca"></div>
              <div className="logo-div digital-3g"></div>
              <div className="logo-div magi"></div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
