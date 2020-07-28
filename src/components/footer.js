import Container from 'react-bootstrap/Container';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './footer.css';
class Footer extends React.Component {
    render() {
        return (
            <>
                <div className="footer">
                    <Container>
                        <Row style={{ 'padding': '50px 0 50px 0' }}>
                            <Col md={8} style={{ 'text-align': 'left' }}>
                                <h3>Gary Yang</h3>
                                <span>聯絡方式：<a href="mailto:gary11159@gmail.com">gary11159@gmail.com</a></span>
                            </Col>
                            <Col md={4} style={{ 'text-align': 'right' }}>
                            // 這裡做 social media
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        );
    }
}

export default Footer;