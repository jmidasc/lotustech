import logo from './logo.svg';
import './App.css';
import "react-bootstrap";
import "font-awesome/css/font-awesome.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./resource/styles/aos.css";
import "./resource/styles/style-min.css";
import "./resource/styles/custom.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ShowCase from './Component/ShowCase';
import Testimonial from './Component/Testimonial';
import SuccessfulBanner from './Component/SuccessfulBanner';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div className='main'>
        <ShowCase />
        <Testimonial />
        <SuccessfulBanner />
      </div>
      <Footer />
    </div>
  );
}

export default App;
