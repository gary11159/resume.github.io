import Container from 'react-bootstrap/Container';
import React, { Fragment } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ScrollAnimation from 'react-animate-on-scroll';

function Skill() {
    React.useEffect(() => {
        window.addEventListener('scroll', function () {
            let scrollPosition = window.pageYOffset;
            let bgParallax = document.getElementsByClassName('parallax_2')[0];
            let limit = bgParallax.offsetTop + bgParallax.offsetHeight;
            if (scrollPosition <= limit) {
                bgParallax.style.backgroundPositionY = (50 - 20 * scrollPosition / limit) + '%';
            } else {
                bgParallax.style.backgroundPositionY = '50%';
            }
        });
    });
    return (
        <>
            <div id="skill" className="parallax_2">
                <ScrollAnimation animateIn='flipInX' animateOnce={true}>
                    <Container className="padding-50">
                        {/* 技能 */}
                        <Row>
                            <Col md={4}>
                                <hr />
                                <h2 className="font_0 black">Topic1</h2>
                                <ul className="font_3 black">
                                    <li>
                                        skill1
                                </li>
                                    <li>
                                        skill2
                                </li>
                                </ul>
                            </Col>
                            <Col md={4}>
                                <hr />
                                <h2 className="font_0 black">Topic2</h2>
                                <ul className="font_3 black">
                                    <li>
                                        skill1
                                </li>
                                    <li>
                                        skill2
                                </li>
                                </ul>
                            </Col>
                            <Col md={4}>
                                <hr />
                                <h2 className="font_0 black">Topic3</h2>
                                <ul className="font_3 black">
                                    <li>
                                        skill1
                                </li>
                                    <li>
                                        skill2
                                </li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </ScrollAnimation>
            </div>
        </>
    );
}

export default Skill;