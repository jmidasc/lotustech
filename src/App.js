<<<<<<< HEAD

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
=======
import "./App.css";
>>>>>>> 84ee1563f27456b166d92913fda1e3de27613a70
import "react-bootstrap";
import "font-awesome/scss/font-awesome.scss";
import "bootstrap/scss/bootstrap.scss";
import "./assets/styles/style-min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
<<<<<<< HEAD
import Home from './Page/Home';
import ContactUs from './Page/ContactUs';

function App() {
  return (
    <Router>
      <div className="App home-page-body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
=======

import Header from "./Component/Header";
import TopRow from "./Component/TopRow";
import WhatDoWeDo from "./Component/WhatDoWeDo";
import Collaboration from "./Component/Collaboration";
import CollaborationContract from "./Component/CollaborationContract";
import ShowCase from "./Component/ShowCase";
import Testimonial from "./Component/Testimonial";
import SuccessfulBanner from "./Component/SuccessfulBanner";
import Footer from "./Component/Footer";

import ContactUs from "./page/ContactUs";

function App() {
  return (
    /*
    <div className="App home-page-body">
      <Header></Header>
      <div className="main">
        <TopRow></TopRow>
        <WhatDoWeDo></WhatDoWeDo>
        <Collaboration></Collaboration>
        <CollaborationContract></CollaborationContract>
        <ShowCase />
        <SuccessfulBanner />
      </div>
      <Footer />
    </div>
    */
    <ContactUs></ContactUs>
>>>>>>> 84ee1563f27456b166d92913fda1e3de27613a70
  );
}

export default App;
