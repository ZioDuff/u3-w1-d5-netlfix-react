import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NetflixLogo from "../Assets/logo.png"

const MyNav = () => {
  return (
    <Navbar data-bs-theme="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img className="NetflixLogo" src={NetflixLogo} alt="NetflixLogo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="border-light "
        />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="me-auto">
            <Nav.Link className="active fw-bold" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className=" fw-bold" href="#v Shows">
              Tv Shows
            </Nav.Link>
            <Nav.Link className=" fw-bold" href="#Movies">
              Movies
            </Nav.Link>
            <Nav.Link className=" fw-bold" href="#Recently">
              Recently Added
            </Nav.Link>
            <Nav.Link className=" fw-bold" href="#My List">
              My List
            </Nav.Link>
          </Nav>
          <div className="d-flex align-items-center">
            <i className="bi bi-search icons"></i>
            <div id="kids" className="fw-bold">
              KIDS
            </div>
            <i className="bi bi-bell icons"></i>
            <i className="bi bi-person-circle icons"></i>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default MyNav
