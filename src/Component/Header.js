import React, { useEffect } from 'react';
import { useState } from 'react';
// import './Header.scss'
export default () => {

  const [changeHeader, setChangeHeader] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', (event) => {
      let scrollTop = event.srcElement.body.scrollTop;
      if (scrollTop >= 160)
        setChangeHeader('change');
      else
        setChangeHeader('');
    })
  }, [])
  return (
    <header className={`${changeHeader}`}>
      <nav class="navbar navbar-expand-lg navbar-light fixed-top outer-header-scroll">
        <div class="container">
          <a class="navbar-brand" href="https://www.keyideasinfotech.com">
            <img src="https://www.keyideasinfotech.com/wp-content/uploads/2020/08/blue-logo.svg" class="logo-size without-scroll" alt="logo" title="logo" />
              <img src="https://www.keyideasinfotech.com/wp-content/uploads/2020/08/white-logo.svg" class="logo-size with-scroll" alt="logo" title="logo" data-qbcyl2xxl="" />
              </a>
              <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#main-nav-1" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <svg class="menu-toggle" xmlns="https://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><path stroke="rgba(0, 0, 0, 0.5)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M4 7h22M4 15h22M4 23h22"></path></svg>
              </button>
              <div class="navbar-collapse collapse main-new-header" id="main-nav-1">
                <ul class="navbar-nav ml-auto mainnav w-100 justify-content-end">
                  <li class="hassubs mob-multi-menu">
                    <a>Services</a>
                    <ul class="dropdown p-0">
                      <li class="subs hassubs"><a href="https://www.keyideasinfotech.com/ux-ui-design/">UX Design</a>
                        <ul class="dropdown p-0">
                          <li class="subs"><a href="https://www.keyideasinfotech.com/web-design/">Web Design</a></li>
                          <li class="subs"><a href="https://www.keyideasinfotech.com/user-centered-design-agency/">UI Design</a></li>
                          <li class="subs"><a href="https://www.keyideasinfotech.com/graphic-design/">Graphic Design</a></li>
                        </ul>
                      </li>
                      <li class="subs hassubs"><a href="https://www.keyideasinfotech.com/digital-marketing/">Digital Marketing</a>
                        <ul class="dropdown p-0">
                          <li class="subs"><a href="https://www.keyideasinfotech.com/search-engine-optimization-seo-agency/">Search Engine Optimization</a></li>
                          <li class="subs"><a href="https://www.keyideasinfotech.com/search-engine-marketing-services/">Search Engine Marketing</a></li>
                          <li class="subs"><a href="https://www.keyideasinfotech.com/social-media-marketing/">Social Media Marketing</a></li>
                          <li class="subs"><a href="https://www.keyideasinfotech.com/email-marketing-services/">Email Marketing</a></li>
                        </ul>
                      </li>
                      <li class="subs hassubs"><a href="#">Technology</a>
                        <ul class="dropdown p-0">
                          <li class="subs"><a href="https://www.keyideasinfotech.com/website-development/">Web Development</a></li>
                          <li class="subs"><a href="https://www.keyideasinfotech.com/ecommerce/">E-commerce Website</a></li>
                          <li class="subs"><a href="https://www.keyideasinfotech.com/application-development/">Mobile App Development</a></li>
                          <li class="subs"><a href="https://www.keyideasinfotech.com/website-development/content-management-system/">CMS Development</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li class="hassubs mob-multi-menu">
                    <a title="Case Studies" href="https://www.keyideasinfotech.com/portfolio/" class="nav-link">Portfolio</a>
                    <ul class="dropdown p-0">
                      <li class="subs"><a href="https://www.keyideasinfotech.com/portfolio/ui-ux-gallery/">UI-UX Gallery</a></li>
                    </ul>
                  </li>
                  <li class="hassubs mob-multi-menu">
                    <a title="Case Studies" href="https://www.keyideasinfotech.com/industries/" class="nav-link">Industries</a>
                    <ul class="dropdown p-0">
                      <li class="subs"><a href="https://www.keyideasinfotech.com/industries/retail-ecommerce/">Retail and e-Commerce</a></li>
                      <li class="subs"><a href="https://www.keyideasinfotech.com/industries/professional-services-web-design/">Professional Service</a></li>
                      <li class="subs"><a href="https://www.keyideasinfotech.com/industries/legal-web-design/">Legal</a></li>
                      <li class="subs"><a href="https://www.keyideasinfotech.com/industries/home-repair-website-design/">Home and Repair</a></li>
                      <li class="subs"><a href="https://www.keyideasinfotech.com/industries/tourism-hospitality-website-design/">Tourism and Hospitality</a></li>
                      <li class="subs"><a href="https://www.keyideasinfotech.com/industries/food-beverage/">Food and Beverage</a></li>
                    </ul>
                  </li>
                  <li class="hassubs mob-multi-menu">
                    <a href="https://www.keyideasinfotech.com/company/">Company</a>
                    <ul class="dropdown p-0">
                      <li class="subs"><a href="https://www.keyideasinfotech.com/blog/">Ideas</a></li>
                      <li class="subs"><a href="https://www.keyideasinfotech.com/careers/">Careers</a></li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a title="Contact Us" href="https://www.keyideasinfotech.com/contact-us/" class="nav-link">Let's Talk</a> </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        );
};
