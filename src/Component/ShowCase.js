import React from "react";

export default () => {
  const settings = {
    dots: true,
    speed: 500,
  }
  return (
    <div className="home-our-showcase-section homepage-showcase">
      <div className="container">
        <div className="col-sm-12 text-center showcase-heading">
          <span>OUR SHOWCASE</span>
          <h2>Some of our finest &amp; recent work</h2>
        </div>
        <div className="case-study-slider slick-initialized slick-slider slick-dotted">
          <div className="slick-list draggable">
            <div className="slick-track" style={{
              opacity: 1,
              width: "811px",
              transform: "translate3d(0px, 0px, 0px)"
            }
            }>
              <div className="review-inner slick-slide slick-current slick-active"
                data-slick-index="0"
                aria-hidden="false"
                style={{ width: "811px" }}
                tabIndex="0"
                role="tabpanel"
                id="slick-slide10"
                aria-describedby="slick-slide-control10">
                <div className="col-sm-6 pull-left pr-md-5">
                  {/* <img src="https://www.keyideasinfotech.com/wp-content/uploads/2020/08/gif-video-img.jpg" className="img-fluid" alt="gif-video-img" /> */}
                </div>
                <div className="col-sm-6 case-study pull-right pl-md-4">
                  <h3>Jewelry Web Design &amp; Development</h3>
                  <p>We made a website with a completely operational e-commerce CMS, with a custom theme to coordinate our customer's vision. Our UI/UX designers made the website with the end goal that it had a trendy design, clean format, simple interfaces, and limitless customization.
                  </p>
                  <a className="btn btn-readcase" href="https://www.keyideasinfotech.com/portfolio/diamond-jewelry-ecommerce-chicago/" tabIndex="0">Read Case Study</a>
                  <div className="monthy-wise-visit mt-4 row">
                    <div className="monthy-wise-left pull-left  col-sm-3">
                      <label>28%</label>
                      <p>ROI Increase</p>
                    </div>
                    <div className="monthy-wise-right pull-right col-sm-6">
                      <label>18k</label>
                      <p>Monthly Website Visits</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul className="slick-dots" role="tablist">
            <li className="slick-active" role="presentation">
              <button type="button" role="tab" id="slick-slide-control10" aria-controls="slick-slide10" aria-label="1 of 1" tabIndex="0" aria-selected="true">1</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}