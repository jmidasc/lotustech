import React, { useEffect } from "react";
import { useState } from "react";
import "./index.scss";

export default () => {
  const [changeHeader, setChangeHeader] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      let scrollTop = event.srcElement.body.scrollTop;
      if (scrollTop >= 85) setChangeHeader("-fixed");
      else setChangeHeader("");
    });
  }, []);
  return (
    <>
      <div className={`header${changeHeader}`}>
        <div className="content-container">
          <div className="logo">
            <a href={`${process.env.PUBLIC_URL}/`} >
              <img src={`${process.env.PUBLIC_URL}/logo.png`} />
            </a>
            <a href={`${process.env.PUBLIC_URL}/`} className="co-name">
              沈阳<span className="subject"> 太阳莲花 </span>科技有限公司
            </a>
          </div>
          <div className="button talk">Let's talk</div>
        </div>
      </div>
      <div className="main-container">
        <div className="content-container">
          <div className="heading">
            <div className="line1">Let's Do It, Great</div>
            <div className="line2">Be With Us, Work Together</div>
          </div>
          <div className="content">
            <div className="content-left">
              <div className="heading">Tell Us About Yourself</div>

              <div className="form-container">
                <input placeholder="Your Name"></input>
                <input placeholder="Company Name"></input>
                <input placeholder="Email"></input>
                <input placeholder="Phone Number"></input>
                <textarea
                  cols="40"
                  rows="10"
                  aria-required="true"
                  aria-invalid="false"
                  placeholder="Project Describe"
                ></textarea>
                <div className="button submit-enabled">Submit</div>
              </div>
            </div>
            <div className="content-right">
              <div className="heading">or Get In Touch</div>
              <div className="contact-line">
                <div className="img-container">
                  <img
                    src={`${process.env.PUBLIC_URL}/uploads/contactus/phone-contact.png`}
                    alt="icon"
                  />
                </div>
                <div className="text">+86 173 4101-1982</div>
              </div>
              <div className="contact-line">
                <div className="img-container">
                  <img
                    src={`${process.env.PUBLIC_URL}/uploads/contactus/email-contact.png`}
                    alt="icon"
                  />
                </div>
                <div className="text">sales@sunlotustech.com</div>
              </div>
              <div className="contact-line">
                <div className="img-container">
                  <img
                    src={`${process.env.PUBLIC_URL}/uploads/contactus/box-contact.png`}
                    alt="icon"
                  />
                </div>
                <div className="text">jobs@sunlotustech.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
