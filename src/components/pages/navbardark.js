import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarDark() {
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">LA City - Bureau Of Engineering</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown id="nav-dropdown-dark-example" title="Street View UI Selection" menuVariant="dark">
              <NavDropdown.Item href="https://www.mapillary.com/embed?image_key=550092599700936&style=photo" target="_self">Showcase I</NavDropdown.Item>
              <NavDropdown.Item href="https://www.mapillary.com/embed?image_key=259103735961077&style=photo" target="_self">Showcase II</NavDropdown.Item>
              <NavDropdown.Item href="https://www.mapillary.com/embed?image_key=145728107523175&style=photo" target="_self">Showcase III</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Highest Priority Showcase</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarDark;