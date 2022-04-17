import React from 'react'
import './WhatDoWeDo.scss'

export default () => {
  return (
    <>
      <div className = 'what-do-we-do-container'>
        <div className = 'container'>
          <div className = 'row'>
            <div className = 'row-left'>
              <div className = 'content'>
                <div className = 'title'>
                  WHAT WE DO
                </div>
                <h2 className = 'heading'>
                  Website Design Agency
                </h2>
                <p>
                  A decade ago, we started with a small team of web designers &amp; scaled up to a full-service digital agency that specializes in marketing, branding, software development, web design and development. Focusing on innovative and web-driven solutions. We build digital experiences that are client-centered &amp; long-lasting.
                </p>
                <p>
                  <div className = 'button'>Discover More</div>
                </p>
              </div>
            </div>
            <div className = 'row-right'>
              <div className = 'content'>
                <div className = 'row'>
                  <div className = 'text-container'>
                    <div className = 'text'>
                      <div className = 'icon ui-ux-icon'></div>
                      <h3 className = 'heading'>
                        UI/UX
                      </h3>
                      <p>
                      Being a web design agency, we specialize in building flawless web designs, providing an interactive UI. We create user-friendly web and mobile app interfaces. Get the benefit of our specialized functionalities and visual elements.
                      </p>
                    </div>
                  </div>
                  <div className = 'text-container'>
                    <div className = 'text'>
                      <div className = 'icon dev-icon'></div>
                      <h3 className = 'heading'>
                        DEVELOPMENT
                      </h3>
                      <p>
                      We build clean & customized websites & apps to create a lasting impression both visually and interactively. Build a responsive, eye-catching, & mobile-friendly website that will attract your visitors.
                      </p>
                    </div>
                  </div>
                  <div className = 'text-container'>
                    <div className = 'text'>
                      <div className = 'icon marketing-icon'></div>
                      <h3 className = 'heading'>
                        MARKETING
                      </h3>
                      <p>
                      Ensuring to help you build a brand that elevates your brand’s presence, and increase brand exposure with custom strategy, channel expertise, and impeccable execution.
                      </p>
                    </div>
                  </div>
                  <div className = 'text-container'>
                    <div className = 'text'>
                      <div className = 'icon marketing-icon'></div>
                      <h3 className = 'heading'>
                        e-Commerce
                      </h3>
                      <p>
                      We take a focused approach to build &amp; execute the online store that helps you boost online engagement. We make an e-commerce website that will help you increase online sales &amp; services.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}