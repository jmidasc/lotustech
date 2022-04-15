import React from "react";
import { Row, Col } from "react-bootstrap";

export default () => (
  <div className="successful-banner-section position-relative">
    <Col sm={12}>
      <Row>
        <Col sm={12} className="d-flex justify-content-center align-items-center">
          <div className="successful-inner-section position-relative text-white text-center">
            <span>Let's work together</span>
            <div className="need-successful-text">Need a successful project?</div>
            <div className="ep"> <a href="https://www.keyideasinfotech.com/contact-us/">Estimate Project</a></div>
            <p><span>or call us now</span> <a href="tel:+1 617-934-6763">+1 617-934-6763</a> </p>
          </div>
        </Col>
      </Row>
    </Col>
  </div>
)