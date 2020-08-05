import Container from 'react-bootstrap/Container';
import React, { Fragment } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Animate, AnimateKeyframes, AnimateGroup } from "react-simple-animate";
import $ from 'jquery';

function Info(props) {
    React.useEffect(() => {
        // 背景Loading
        let src = $('#test').css('background-image');
        let url = src.match(/\((.*?)\)/)[1].replace(/('|")/g, '');

        let img = new Image();
        img.onload = function () {
            props.setLoaded(false);
        }
        img.src = url;
    });
    React.useEffect(() => {
        window.addEventListener('scroll', function () {
            let scrollPosition = window.pageYOffset;
            let bgParallax = document.getElementsByClassName('parallax')[0];
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
            <div id="test" className="parallax">
                <Container className="padding-50">
                    <AnimateGroup play>
                        {/* 名子 */}
                        <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={0}>
                            <Row>
                                <Col>
                                    <h1 className="center font_0" style={{ fontWeight: '700' }}>楊忠原<br/>GaryYang</h1>
                                </Col>
                            </Row>
                        </Animate>
                        {/* icon */}
                        <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={1}>
                            <Row>
                                <Col className="center social_link">
                                    <a className="padding5" href="https://www.cakeresume.com/me/gary-yang" target="_blank" rel="nofollow noopener noreferrer">
                                        <img src='https://i.imgur.com/kNpugNN.png' className="wd24" />
                                    </a>

                                    <a className="padding5" href="mailto:gary11159@gmail.com" target="_blank" rel="nofollow noopener noreferrer">
                                        <img src='https://i.imgur.com/ZO0xFRL.png' className="wd24" />
                                    </a>
                                    <p className="font_8">可點擊圖示聯絡我唷</p>
                                    <p className="font_6">
                                        24歲
                                        <br/>
                                        Taipei, New Taipei, Taiwan
                                        <br/>
                                        0919-683-326
                                    </p>
                                </Col>
                            </Row>
                        </Animate>
                        {/* 簡單介紹 */}
                        <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={2}>
                            <Row>
                                <Col className="center">
                                    <span className="fs40 bold font_0">軟體工程師</span>
                                </Col>
                            </Row>
                        </Animate>
                        <br />
                        <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={3}>
                            <Row>
                                <Col className="center margin-top-5 font_5">
                                    畢業於中原大學資訊工程學系(2014~2018)
                                    <br/>
                                    目前在鴻揚科技公司擔任專職的網頁開發者超過一年(2019/02 ~ 現在)
                                    <br/>
                                    現在位於台灣之星(駐點人員)負責網頁前端開發與維護。
                                    <br/>
                                    曾經開發過遠傳內部人員風險管控系統、資策會台塑專案熱感應設備監控頁面。
                                    <br/>
                                    不畏懼挑戰，盡可能的用不同方法迎接各種挑戰。
                                    <br/>
                                    對前端有更加高的熱忱，也熱愛與UI/UX團隊、後端團隊合作的開發模式。
                                </Col>
                            </Row>
                        </Animate>
                    </AnimateGroup>
                </Container>
            </div>
        </>
    );
}

export default Info;