import React from "react";
import "./Collaboration.scss";

export default () => {
  return (
    <>
      <div className="collaboration-container">
        <div className="container">
          <div className="content-container">
            <div className="title">WHO WE ARE</div>
            <div className="heading">
              Our expert designers and engineers know collaboration is the
              essence.
            </div>

            <div className="collaboration-content-col">
              <div className="icon master-icon"></div>
              <h3 className="collaboration-heading">Masters</h3>
              <div className="text">
                To us, the success of our clients is our success, we take the
                time to learn about your goals, and we aim to deliver
                flawlessly. We focalize our skills with your industry insight.
              </div>
            </div>

            <div className="collaboration-content-col">
              <div className="icon delivery-icon"></div>
              <h3 className="collaboration-heading">Deliverables</h3>
              <div className="text">
                We guarantee our deliverables, which implies you know where your
                hard-earned money is being put in. Our flexible &amp; agile
                process guides the project.
              </div>
            </div>

            <div className="collaboration-content-col">
              <div className="icon roi-icon"></div>
              <h3 className="collaboration-heading">ROI</h3>
              <div className="text">
                We gauge the numbers &amp; that means you need not to. We give
                weekly and regular monthly updates with real-time reports.
              </div>
            </div>

            <div className="collaboration-content-col">
              <div className="icon sme-icon"></div>
              <h3 className="collaboration-heading">Startups</h3>
              <div className="text">
                Need what corporates have? Those intact animations, &amp;
                functional layout. Design effectively with elegance.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
