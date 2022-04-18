import './App.css';
import "react-bootstrap";
import "font-awesome/scss/font-awesome.scss";
import 'bootstrap/scss/bootstrap.scss';
import "./assets/styles/style-min.css";
import "./assets/styles/custom.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from "./Component/Header";
import TopRow from "./Component/TopRow";
import WhatDoWeDo from "./Component/WhatDoWeDo";
import Collaboration from "./Component/Collaboration";
import CollaborationContract from "./Component/CollaborationContract";
import ShowCase from './Component/ShowCase';
import Testimonial from './Component/Testimonial';
import SuccessfulBanner from './Component/SuccessfulBanner';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App home-page-body">
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
    </div>
  );
}

export default App;
