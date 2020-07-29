import Container from 'react-bootstrap/Container';
import React, { Fragment } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Animate, AnimateKeyframes, AnimateGroup } from "react-simple-animate";
import './info.css'
import CakeResume from '../public/cakeResume.png';
import Gmail from '../public/gmail.png';

function Info() {
    const [content, setContent] = React.useState("123");
    const [items, setItems] = React.useState([
        1, 2
    ])
    return (
        <>
            <AnimateGroup play>
                {/* 名子 */}
                <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={0}>
                    <Row>
                        <Col>
                            <h1 className="center" style={{ fontWeight: '700' }}>Name</h1>
                        </Col>
                    </Row>
                </Animate>
                {/* icon */}
                <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={1}>
                    <Row>
                        <Col className="center social_link">
                            <a className="padding5" href="https://www.cakeresume.com/me/gary-yang" target="_blank" rel="nofollow noopener noreferrer">
                                <img src={CakeResume} className="wd24" />
                            </a>

                            <a className="padding5" href="mailto:gary11159@gmail.com" target="_blank" rel="nofollow noopener noreferrer">
                                <img src={Gmail} className="wd24" />
                            </a>

                            <a className="padding5" href="mailto:gary11159@gmail.com" target="_blank" rel="nofollow noopener noreferrer">
                                gary11159@gmail.com
                    </a>
                        </Col>
                    </Row>
                </Animate>
                {/* 簡單介紹 */}
                <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={2}>
                    <Row>
                        <Col className="center">
                            <AnimateKeyframes
                                play
                                duration={1.5}
                                iterationCount="infinite"
                                keyframes={[
                                    'transform: scale(1.2)',
                                    'transform: scale(1)',
                                    'transform: scale(1.2)',
                                ]}
                            >
                                <span className="fs24">Position</span>
                            </AnimateKeyframes>
                        </Col>
                    </Row>
                </Animate>
                <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={3}>
                    <Row>
                        <Col className="center margin-top-5">
                            3423423pjepfogdjpofgjsdpogjspodg3423423pjepfogdjpofgjsdpogjspodg3423423pjepfogdjpofgjsdpogjspodg3423423pjepfogdjpofgjsdpogjspodg3423423pjepfogdjpofgjsdpogjspodg3423423pjepfogdjpofgjsdpogjspodg3423423pjepfogdjpofgjsdpogjspodg3423423pjepfogdjpofgjsdpogjspodg
                        </Col>
                    </Row>
                </Animate>
                <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={4}>
                    <Row>
                        <Col md={4}>
                            <hr />
                            <Animate start={{ transform: 'translateY(200px)' }} end={{ transform: 'translateY(0)' }} sequenceIndex={4}>
                                <div>
                                    <h2>Topic1</h2>
                                </div>
                            </Animate>
                        </Col>
                        <Col md={4}>
                            <hr />
                            <Animate start={{ transform: 'translateY(200px)' }} end={{ transform: 'translateY(0)' }} sequenceIndex={4}>
                                <div>
                                    <h2>Topic2</h2>
                                </div>
                            </Animate>
                        </Col>
                        <Col md={4}>
                            <hr />
                            <Animate start={{ transform: 'translateY(200px)' }} end={{ transform: 'translateY(0)' }} sequenceIndex={4}>
                                <div>
                                    <h2>Topic3</h2>
                                </div>
                            </Animate>
                        </Col>
                    </Row>
                </Animate>

            </AnimateGroup>
        </>
    );
}

export default Info;