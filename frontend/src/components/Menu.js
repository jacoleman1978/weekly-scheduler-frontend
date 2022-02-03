import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Menu(props) {
    const names = props.names
    const days = props.days
    const nameURL = "/schedules/name/";
    const dayURL = "/schedules/day/";

    const namesMenu = names.map((name, i) => {
        return (
            <NavDropdown.Item href={nameURL + name} key={i}>{name}</NavDropdown.Item>
        )
    })
    const daysMenu = days.map((day, i) => {
        return (
            <NavDropdown.Item href={dayURL + day} key={i}>{day}</NavDropdown.Item>
        )
    })

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">The Colemartasons</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Today's Schedule</Nav.Link>
                        <Nav.Link href="/schedules">Weekly Schedule</Nav.Link>
                        <NavDropdown title="Person" id="basic-nav-dropdown">
                            {namesMenu}
                        </NavDropdown>
                        <NavDropdown title="Day" id="basic-nav-dropdown">
                            {daysMenu}
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Menu;