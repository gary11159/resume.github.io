import Container from 'react-bootstrap/Container';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AnimateOnChange } from 'react-animation'

function Content() {
    const [content, setContent] = React.useState("123");
    return (
        <>
            <Container>
                <AnimateOnChange>
                    <span onClick={() => setContent('321')}>{content}</span>
                </AnimateOnChange>
            </Container>
        </>
    );
}

export default Content;