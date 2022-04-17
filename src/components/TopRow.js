import React from 'react';
import './TopRow.scss';

export default () => {
  return(
    <div className = 'top-row'>
      <div className = 'container'>
        <div className = 'row'>
          <div className = 'content-container-left'>
            <div className = 'content'>
              <div className = 'heading'>
                <span>Creative</span> Web Design and <br></br> Development  <span>Company</span>
              </div>
              <div className = 'text'>
                Custom web development, UI/UX design, integrations, branding and digital marketing.
              </div>
              <p>
                <div className = 'button'>View Portfolio</div>
              </p>
            </div>
          </div>
          <div className = 'content-container-right'>
            <div className = 'image'>
              <img className= 'img-fluid' src="https://www.keyideasinfotech.com/wp-content/uploads/2020/08/home-page-image.jpg" alt="Home page Image"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}