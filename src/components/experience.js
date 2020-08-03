import Container from 'react-bootstrap/Container';
import React, { Fragment } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ScrollAnimation from 'react-animate-on-scroll';
import $ from 'jquery';

function Experience() {
    React.useEffect(() => {
        let getStyle = function (_dom, attr) {
            return _dom.currentStyle ? _dom.currentStyle[attr] : getComputedStyle(_dom, false)[attr];
        }
        let dom = document.getElementById('con');
        let clientHeight = dom.clientHeight;
        let paddingTop = Number(getStyle(dom, "paddingTop").replace(/\s+|px/gi, ""));
        let paddingBottom = Number(getStyle(dom, "paddingBottom").replace(/\s+|px/gi, ""));
        let height = (clientHeight - paddingTop - paddingBottom) / 2;
        document.getElementById('line').setAttribute('style', 'bottom:'+ height + 'px !important');
    });
    return (
        <>
            <div id="experience" className="parallax_3">
                <br /><br />
                <h1 className="center font_0" style={{ fontWeight: '700' }}>Experience</h1>
                <br />
                <Container id="con" className="padding-50">
                    {/* 名子 */}
                    <Row id="row_1">
                        <Col id="exp1" md={6} className="right">
                            <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOut" animateOnce={true}>
                                <Container className="exContainerR">
                                    <p className="font_7">
                                        2017-2018
                                        <svg id="1" xmlns="http://www.w3.org/2000/svg" version="1.1" className="point" style={{ left: '45px' }}>
                                            <circle cx="5" cy="5" r="5" style={{ fill: '#d9c791' }} />
                                        </svg>
                                    </p>
                                    <h5 className="font_5 margin_bottom_25">Project Name</h5>
                                    <span className="description">Associate Design Director</span>
                                    <br></br>
                                    <span style={{ color: 'gray' }}>I'm a paragraph. Click here to add your own text and edit me.
                                            It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. </span>
                                </Container>
                            </ScrollAnimation>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                        </Col>
                        <Col id="exp2" md={6} className="left">
                            <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOut" animateOnce={true}>
                                <Container className="exContainerL">
                                    <p className="font_7">
                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="point" style={{ right: '45px' }}>
                                            <circle cx="5" cy="5" r="5" style={{ fill: '#d9c791' }} />
                                        </svg>
                                        2017-2018
                                    </p>
                                    <h5 className="font_5 margin_bottom_25">Project Name</h5>
                                    <span className="description">Associate Design Director</span>
                                    <br></br>
                                    <span style={{ color: 'gray' }}>I'm a paragraph. Click here to add your own text and edit me.
                                            It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. </span>
                                </Container>
                            </ScrollAnimation>
                        </Col>
                    </Row>
                    <Row>
                        <Col id="exp3" md={6} className="right">
                            <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOut" animateOnce={true}>
                                <Container className="exContainerR">
                                    <p className="font_7">
                                        2017-2018
                                        <svg id="2" xmlns="http://www.w3.org/2000/svg" version="1.1" className="point" style={{ left: '45px' }}>
                                            <circle cx="5" cy="5" r="5" style={{ fill: '#d9c791' }} />
                                        </svg>
                                    </p>
                                    <h5 className="font_5 margin_bottom_25">Project Name</h5>
                                    <span className="description">Associate Design Director</span>
                                    <br></br>
                                    <span style={{ color: 'gray' }}>I'm a paragraph. Click here to add your own text and edit me.
                                            It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. </span>
                                </Container>
                            </ScrollAnimation>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                        </Col>
                        <Col id="exp4" md={6} className="left">
                            <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOut" animateOnce={true}>
                                <Container className="exContainerL">
                                    <p className="font_7">
                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="point" style={{ right: '45px' }}>
                                            <circle cx="5" cy="5" r="5" style={{ fill: '#d9c791' }} />
                                        </svg>
                                        2017-2018
                                    </p>
                                    <h5 className="font_5 margin_bottom_25">Project Name</h5>
                                    <span className="description">Associate Design Director</span>
                                    <br></br>
                                    <span style={{ color: 'gray' }}>I'm a paragraph. Click here to add your own text and edit me.
                                            It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. </span>
                                </Container>
                            </ScrollAnimation>
                        </Col>
                    </Row>
                    <div id="line" className="line"></div>

                </Container>
            </div>
        </>
    );
}

export default Experience;