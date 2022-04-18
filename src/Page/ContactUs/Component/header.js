import React from "react";

export default () => {
  return (
    <header className="fixedHeader">
      <div id="menu_area" className="menu-area">
        <div className="container">
          <div className="row1">
            <nav className="navbar navbar-light navbar-expand-lg mainmenu">
              <a className="navbar-brand" href="https://www.keyideasinfotech.com">
                <img id="logo-img" alt="Logo" className="img-fluid" src="https://www.keyideasinfotech.com/wp-content/themes/keyideas/imglatest/blue-logo.png" />
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="ham-menu"></span>
                <span className="ham-menu"></span>
                <span className="ham-menu"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto w-100 justify-content-md-end align-items-md-center">
                  <li className="hiring"><a href="https://www.keyideasinfotech.com/careers">We're Hiring</a></li>
                  <li className="lets-talk-btn"><a href="https://www.keyideasinfotech.com/contact-us/">Let's Talk</a></li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}