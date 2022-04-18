import React from "react";

import Header from "./Component/Header";
import TopRow from "./Component/TopRow";
import WhatDoWeDo from "./Component/WhatDoWeDo";
import Collaboration from "./Component/Collaboration";
import CollaborationContract from "./Component/CollaborationContract";
import ShowCase from './Component/ShowCase';

import "./assets/styles/custom.css";
// import Testimonial from './Component/Testimonial';
import SuccessfulBanner from './Component/SuccessfulBanner';
import Footer from './Component/Footer';

export default () => {
  return (
    <>
      <Header></Header>
      <div className='main'>
        <TopRow></TopRow>
        <WhatDoWeDo></WhatDoWeDo>
        <Collaboration></Collaboration>
        <CollaborationContract></CollaborationContract>
        <ShowCase />
        {/* <Testimonial /> */}
        <SuccessfulBanner />
      </div>
      <Footer />
    </>
  )
}