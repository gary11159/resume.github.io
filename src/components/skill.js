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
                <br /><br />
                <h1 className="center font_0 black" style={{ fontWeight: '700' }}>技能 Skills</h1>
                <ScrollAnimation animateIn='flipInX' animateOnce={true}>
                    <Container className="padding-bottom-50">
                        {/* 技能 */}
                        <Row>
                            <Col md={4}>
                                <hr />
                                <h2 className="font_3 black bold">語言</h2>
                                <ul className="font_5 black">
                                    <li>
                                        C++
                                    </li>
                                    <li>
                                        C#
                                    </li>
                                    <li>
                                        JAVA
                                    </li>
                                    <li>
                                        HTML
                                    </li>
                                    <li>
                                        JavaScript / ES6
                                    </li>
                                    <li>
                                        CSS
                                    </li>
                                    <li>
                                        JQuery
                                    </li>
                                </ul>
                            </Col>
                            <Col md={4}>
                                <hr />
                                <h2 className="font_3 black bold">框架</h2>
                                <ul className="font_5 black">
                                    <li>
                                        ReactJs/Redux/React Router
                                    </li>
                                    <li>
                                        VueJS/Vue Router
                                    </li>
                                    <li>
                                        Spring MVC
                                    </li>
                                    <li>
                                        Boostrap
                                    </li>
                                    <li>
                                        Express.js
                                    </li>
                                    
                                </ul>
                            </Col>
                            <Col md={4}>
                                <hr />
                                <h2 className="font_3 black bold">其他</h2>
                                <ul className="font_5 black">
                                    <li>
                                        版本管控
                                        <ul>
                                            <li>Git</li>
                                            <li>SourceTree</li>
                                            <li>Svn</li>
                                        </ul>
                                    </li>
                                    <li>
                                        壓力測試
                                        <ul>
                                            <li>LoadRunner</li>
                                            <li>Jmeter</li>
                                            <li>Postman</li>
                                        </ul>
                                    </li>
                                    <li>
                                        資料庫
                                        <ul>
                                            <li>Oracle</li>
                                            <li>MySQL</li>
                                        </ul>
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