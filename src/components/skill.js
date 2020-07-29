import Container from 'react-bootstrap/Container';
import React, { Fragment } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Animate, AnimateKeyframes, AnimateGroup } from "react-simple-animate";


function Skill() {
    const [content, setContent] = React.useState("123");
    const [items, setItems] = React.useState([
        1, 2
    ])
    return (
        <>
            <Container>
                <Row>
                    <h1>321</h1>
                </Row>

            </Container>
        </>
    );
}

export default Skill;