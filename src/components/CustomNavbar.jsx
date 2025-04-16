import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const CustomNavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          Remote Jobs
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/favourites">
            Preferiti
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default CustomNavBar;
