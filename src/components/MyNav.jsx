
import { Container, Nav, Navbar } from "react-bootstrap";
import { List } from "react-bootstrap-icons";

const MyNav = () => {
  return (
    <Navbar expand="lg" className="bg-dark text-light">
      <Container>
        <Navbar.Brand href="#home" className="text-white">
          Climat App
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <List className="fs-4" />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;