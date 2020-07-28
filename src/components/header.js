import Container from 'react-bootstrap/Container';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../logo.svg';
import { Navbar, Nav } from 'react-bootstrap';

class Header extends React.Component {
    render() {
        return (
            <>
                <Container>
                    <Navbar>
                        <Navbar.Brand href="/">Gary Yang</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </>
        );
    }
}

export default Header;