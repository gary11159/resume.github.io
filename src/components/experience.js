import Container from 'react-bootstrap/Container';
import React, { Fragment } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Animate, AnimateKeyframes, AnimateGroup } from "react-simple-animate";

import './experience.css'
function Experience() {
    const [animation, setAnimation] = React.useState(false);
    React.useEffect(() => {
        window.addEventListener('scroll', function () {
            let scrollPosition = window.pageYOffset;
            let bgParallax = document.getElementsByClassName('parallax_3')[0];
            let limit = bgParallax.offsetTop + bgParallax.offsetHeight;
            if (scrollPosition > bgParallax.offsetTop - 500 && scrollPosition <= limit) {
                if (!animation) {
                    setAnimation(true);
                }
                bgParallax.style.backgroundPositionY = (50 - 30 * scrollPosition / limit) + '%';
            } else {
                bgParallax.style.backgroundPositionY = '50%';
            }
        });
    });
    return (
        <>
            <div id="experience" className="parallax_3">
                <Container className="padding-50">
                    {animation &&
                        <AnimateGroup play>
                            {/* 名子 */}
                            <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={0}>
                                <Row>
                                    <Col>
                                        <h1 className="center font_0" style={{ fontWeight: '700' }}>Name</h1>
                                    </Col>
                                </Row>
                            </Animate>
                        </AnimateGroup>
                    }
                    <div className="line"></div>
                </Container>
            </div>
        </>
    );
}

export default Experience;