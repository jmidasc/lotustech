import React from "react";
import { Col, Container } from "react-bootstrap";

export default () => {
  return (
    <div className="home-collaboration-section">
      <Container>
        <Col sm={9} className="home-collaboration-inner offset-sm-3">
        <span>WHO WE ARE</span><p></p>
          <h2>Our expert designers and engineers know collaboration is the essence.</h2>
          <div className="collaboration-col">
            <span className="gbl-spirit master-icon"></span><p></p>
            <h3 className="collaboration-heading">Masters</h3>
            <p>To us, the success of our clients is our success, we take the time to learn about your goals, and we aim to deliver flawlessly. We focalize our skills with your industry insight.</p>
            <p></p></div>
          <div className="collaboration-col">
            <span className="gbl-spirit deliverable-icon"></span><p></p>
            <h3 className="collaboration-heading">Deliverables</h3>
            <p>We guarantee our deliverables, which implies you know where your hard-earned money is being put in. Our flexible &amp; agile process guides the project.</p>
            <p></p></div>
          <div className="collaboration-col">
            <span className="gbl-spirit roi-icon"></span><p></p>
            <h3 className="collaboration-heading">ROI</h3>
            <p>We gauge the numbers &amp; that means you need not to. We give weekly and regular monthly updates with real-time reports.</p>
            <p></p></div>
          <div className="collaboration-col">
            <span className="gbl-spirit sme-icon"></span><p></p>
            <h3 className="collaboration-heading">Startups</h3>
            <p>Need what corporates have? Those intact animations, &amp; functional layout. Design effectively with elegance.</p>
            <p></p></div>
          <p></p>
        </Col>
        <p></p>
      </Container>
    </div>
  );
};
