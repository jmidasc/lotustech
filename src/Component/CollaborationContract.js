import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
// import "./CollaborationContract.scss";

export default () => {
  return (
    <div class="home-page-collaboration contact-hr py-3 py-sm-3 py-md-3 py-lg-5 py-xl-5">
      <Container >
        <Row>
          <Col sm={12}>
            <div class="d-block d-sm-block d-md-flex justify-content-between w-100">
              <div class="contact-hr-team">Got a Project or Partnership in Mind?</div>
              <div class="mail-us-btn">
                <Button href="https://www.keyideasinfotech.com/contact-us/" className="btn-mail-us">
                  Let's Talk
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
