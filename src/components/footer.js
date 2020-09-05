import Container from 'react-bootstrap/Container';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './footer.css';
import logo from '../public/logo.png';
class Footer extends React.Component {
    render() {
        return (
            <>
                <div className="footer">
                    <Container>
                        <Row style={{ 'padding': '25px 0 25px 0' }}>
                            <Col md={4} style={{ textAlign: 'center' }}>
                                <img id="logo" style={{ height: '80px' }} src={logo} />
                            </Col>
                            <Col md={8} style={this.props.device === "PC" ? { textAlign: 'left', margin: 'auto' } : { textAlign: 'center' }}>
                                <p className="font_9 black" style={{ marginBottom: '0' }}>© 2020 by Gary Yang. Created by ReactJs Framework</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        );
    }
}

export default Footer;