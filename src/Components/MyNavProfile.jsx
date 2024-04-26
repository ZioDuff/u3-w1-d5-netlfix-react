import Container from "react-bootstrap/Container"

import Navbar from "react-bootstrap/Navbar"
import NetflixLogo from "../Assets/logo.png"

const MyNavProfile = () => {
  return (
    <Navbar data-bs-theme="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img className="NetflixLogo" src={NetflixLogo} alt="NetflixLogo" />
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}
export default MyNavProfile
