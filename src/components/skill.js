import Container from 'react-bootstrap/Container';
import React, { Fragment } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Animate, AnimateKeyframes, AnimateGroup } from "react-simple-animate";
import './skill.css'

function Skill() {
    const [animation, setAnimation] = React.useState(false);
    React.useEffect(() => {
        window.addEventListener('scroll', function () {
            let scrollPosition = window.pageYOffset;
            let bgParallax = document.getElementsByClassName('parallax_2')[0];
            let limit = bgParallax.offsetTop + bgParallax.offsetHeight;
            if (scrollPosition <= limit) {
                if (scrollPosition > (bgParallax.offsetTop - 350) && !animation) {
                    setAnimation(true);
                }
                bgParallax.style.backgroundPositionY = (50 - 20 * scrollPosition / limit) + '%';
            } else {
                bgParallax.style.backgroundPositionY = '50%';
            }
        });
    });
    return (
        <>
            <div id="skill" className="parallax_2">
                <Container className="padding-50">
                    {animation &&
                        <AnimateGroup play>
                            {/* 技能 */}
                            <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={0}>
                                <Row>
                                    <Col md={4}>
                                        <hr />
                                        <Animate start={{ transform: 'translateY(700px)' }} end={{ transform: 'translateY(0)' }} sequenceIndex={1}>
                                            <div>
                                                <h2 className="font_0 black">Topic1</h2>
                                                <ul className="font_3 black">
                                                    <li>
                                                        skill1
                                                    </li>
                                                    <li>
                                                        skill2
                                                    </li>
                                                </ul>
                                            </div>
                                        </Animate>
                                    </Col>
                                    <Col md={4}>
                                        <hr />
                                        <Animate start={{ transform: 'translateY(700px)' }} end={{ transform: 'translateY(0)' }} sequenceIndex={1}>
                                            <div>
                                                <h2 className="font_0 black">Topic2</h2>
                                                <ul className="font_3 black">
                                                    <li>
                                                        skill1
                                                    </li>
                                                    <li>
                                                        skill2
                                                    </li>
                                                </ul>
                                            </div>
                                        </Animate>
                                    </Col>
                                    <Col md={4}>
                                        <hr />
                                        <Animate start={{ transform: 'translateY(700px)' }} end={{ transform: 'translateY(0)' }} sequenceIndex={1}>
                                            <div>
                                                <h2 className="font_0 black">Topic3</h2>
                                                <ul className="font_3 black">
                                                    <li>
                                                        skill1
                                                    </li>
                                                    <li>
                                                        skill2
                                                    </li>
                                                </ul>
                                            </div>
                                        </Animate>
                                    </Col>
                                </Row>
                            </Animate>
                        </AnimateGroup>
                    }
                </Container>
            </div>
        </>
    );
}

export default Skill;