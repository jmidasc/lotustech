import { Container, Row } from "react-bootstrap"

export default () => {
  return (
    <footer class="ki-footer footer-default theme-gradient-2 custom-footer">
      <div class="bg_image--2">
        {/* <!-- Start Footer Top Area --> */}
        <div class="footer-top ki-section-gap">
          <Container>
            <Row>
              <ul class="footerNav diamon-footer xs-mob-ul">
                <li>
                  <div class="title">About Us</div>
                  <div class="footer-widget-item">
                    <p><span class="purple-color">Lotus</span> is a premier web design, mobile apps, and web development company with offices in Shenyang, Liaoning, China.</p>

                    <p>Rated 5 out of 5 on Google, Clutch, and Goodfirms.</p>
                    <ul class="footer-social">
                      {/* <!-- <li>
                        <a href="https://www.facebook.com/SunLotusInfotechPrivateLimited" target="_blank" rel="">
                          <i class="fa fa-facebook-square" aria-hidden="true"></i>
                        </a>
                      </li> --> */}
                      <li>
                        <a href="https://www.linkedin.com/company/SunLotus-infotech-p-limited" target="_blank" rel="">
                          <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li class="sinsta">
                        <a href="https://www.instagram.com/SunLotusglobal/" target="_blank" rel=""><i class="fa fa-instagram" aria-hidden="true"></i></a>
                      </li>
                      <li>
                        <a href="https://twitter.com/SunLotusglobal" target="_blank" rel="">
                          <i class="fa fa-twitter-square" aria-hidden="true"></i>
                        </a>
                      </li>

                    </ul>
                  </div>
                </li>
                <li class="xs-mob-50">
                  <div class="footer-widget-item">
                    <div class="title">Office</div>
                    <div class="footer-menu-container">
                      <p>Naner Road no.14
                        <br />Heping District,
                        <br />Shenyang
                        <br />Liaoning province 
                      </p>
                      <p> <a href="tel: +91 999-940-3715"> +8617341011982</a></p>
                    </div>
                  </div>
                </li>
                <li class="sales-enquiry-li">
                  <div class="footer-widget-item">
                    <div class="title">Tell us about your needs, we’d love to work with you.</div>
                    <div class="footer-menu-container">
                      <p>
                        <a href="mailto:sales@SunLotusinfotech.com">sales@SunLotusinfotech.com</a>
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </Row>
          </Container>
        </div>
        {/* <!-- End Footer Top Area --> */}
        {/* <!-- Start Copyright --> */}
        <div class="copyright copyright-default">
          <Container>

            <ul class="liststyle d-flex justify-content-between">
              <li>© Copyright 2022. All rights reserved.</li>
              <li>
                <a data-hover="Privacy Policy" href={`${process.env.PUBLIC_URL}/sitemap/`}>Sitemap</a>
                {/* <!--<a data-hover="Privacy Policy" href="">Privacy Policy</a>--> */}
              </li>
            </ul>
          </Container>
        </div>
        {/* <!-- End Copyright --> */}
      </div>
    </footer>
  )
}