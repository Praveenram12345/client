import './App.css';
import { Navbar, Nav, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Routes, Route, Link } from 'react-router-dom'; // Use Link for routing
import { useState } from 'react'; // Add useState to manage state
import Deposit from './deposit';
import Cashback from './cashback';
import Register from './register';
import Alldata from './alldata';
import Carousel from 'react-bootstrap/Carousel';
import slide1 from './bg1.jpg';
import slide2 from './bg2.avif';
import slide3 from './bg3.avif';

function App() {
  const [showHomePage, setShowHomePage] = useState(true); // State to toggle Home page (Carousel)

  // Handle the navigation to Register, Deposit, Cashback, Alldata pages
  const handleNavClick = (route) => {
    if (route === '/register' || route === '/deposit' || route === '/cashback' || route === '/alldata') {
      setShowHomePage(false); // Hide the home page when Register, Deposit, Cashback or All data is clicked
    } else {
      setShowHomePage(true); // Show the home page for other routes (like Home)
    }
  };

  return (
    <HashRouter>

        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              {" "}Velavan
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
              <Nav className="ms-auto">
                {/* Use Link instead of Nav.Link */}
                <Nav.Item>
                  <Link to="/" className="nav-link" onClick={() => handleNavClick('/')}>Home</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/register" className="nav-link" onClick={() => handleNavClick('/register')}>Register</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/deposit" className="nav-link" onClick={() => handleNavClick('/deposit')}>Deposit</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/cashback" className="nav-link" onClick={() => handleNavClick('/cashback')}>Cashback</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/alldata" className="nav-link" onClick={() => handleNavClick('/alldata')}>All data</Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Conditionally render Carousel (Home Page) */}
        {showHomePage && (
          <Carousel data-bs-theme="dark" className="carousel">
            <Carousel.Item>
              <img className="d-block w-100" src={slide2} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={slide1} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={slide3} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        )}

        {/* Routes */}
        <Routes>
          
          <Route path="/register" element={<Register />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/cashback" element={<Cashback />} />
          <Route path="/alldata" element={<Alldata />} />
        </Routes>

      
    </HashRouter>
  );
}




export default App;
