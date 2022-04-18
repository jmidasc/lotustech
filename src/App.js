
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import "react-bootstrap";
import "font-awesome/scss/font-awesome.scss";
import 'bootstrap/scss/bootstrap.scss';
import "./assets/styles/style-min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
  );
}

export default App;
