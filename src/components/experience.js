import Container from 'react-bootstrap/Container';
import React, { Fragment } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ScrollAnimation from 'react-animate-on-scroll';
import $ from 'jquery';

function Experience(props) {
    React.useEffect(() => {
        let getStyle = function (_dom, attr) {
            return _dom.currentStyle ? _dom.currentStyle[attr] : getComputedStyle(_dom, false)[attr];
        }
        let dom = document.getElementById('con');
        let clientHeight = dom.clientHeight;
        let paddingTop = Number(getStyle(dom, "paddingTop").replace(/\s+|px/gi, ""));
        let paddingBottom = Number(getStyle(dom, "paddingBottom").replace(/\s+|px/gi, ""));
        let height = (clientHeight - paddingTop - paddingBottom) / 2;
        document.getElementById('line').setAttribute('style', 'bottom:' + (height - 10) + 'px !important');
    });
    React.useEffect(() => {
        // 背景Loading
        let src = $('#experience').css('background-image');
        let url = src.match(/\((.*?)\)/)[1].replace(/('|")/g, '');

        let img = new Image();
        img.onload = function () {
            props.setLoaded(false);
        }
        img.src = url;
    });
    return (
        <>
            <section>
                <div id="experience" className="parallax_3">
                    <br /><br />
                    <h1 className="center font_0" style={{ fontWeight: '700' }}>各駐點經驗</h1>
                    <br />
                    <Container id="con" className="padding-50">
                        {/* 名子 */}
                        <Row id="row_1">
                            <Col id="exp1" md={6} className="right">
                                <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOut" animateOnce={true}>
                                    <Container className="exContainerR containerHeight">
                                        <p className="font_7">
                                            2019/03 - 2019/08
                                        <svg id="1" xmlns="http://www.w3.org/2000/svg" version="1.1" className="point" style={{ left: '45px' }}>
                                                <circle cx="5" cy="5" r="5" style={{ fill: '#d9c791' }} />
                                            </svg>
                                        </p>
                                        <h5 className="font_5 margin_bottom_25">遠傳電信風險管理系統</h5>
                                        <span className="description">軟體工程師</span>
                                        <br></br>
                                        <span className="sp-Right">
                                            壓力測試 - 負責整個專案的壓力測試<br />
                                        刻劃前端頁面 - 負責整個專案35%的頁面(Vue.js)<br />
                                        後端資料組合 - Spring MVC RESTful API 設計<br />
                                        需求確認 - 與PM、SA、SD以及客戶有良好的溝通<br />
                                        </span>
                                    </Container>
                                </ScrollAnimation>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                            </Col>
                            <Col id="exp2" md={6} className="left">
                                <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOut" animateOnce={true}>
                                    <Container className="exContainerL containerHeight">
                                        <p className="font_7">
                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="point" style={{ right: '45px' }}>
                                                <circle cx="5" cy="5" r="5" style={{ fill: '#d9c791' }} />
                                            </svg>
                                        2019/09 - 2020/01
                                    </p>
                                        <h5 className="font_5 margin_bottom_25">資策會展場設備資料呈現</h5>
                                        <span className="description">軟體工程師</span>
                                        <br></br>
                                        <span className="sp-Left">
                                            影像呈現 - 獨立完成前端、後端、資料庫所有需求<br />
                                        圖形化報表 - Highchart.js以及heatMap.js設計熱感應圖表<br />
                                        RS232資料傳遞 - Express.js + Node.js + Socket.IO<br />
                                        出差展覽 - 實際到台塑展覽自身設備<br />
                                        </span>
                                    </Container>
                                </ScrollAnimation>
                            </Col>
                        </Row>
                        <Row>
                            <Col id="exp3" md={6} className="right">
                                <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOut" animateOnce={true}>
                                    <Container className="exContainerR containerHeight">
                                        <p className="font_7">
                                            2020/01 - 現在
                                        <svg id="2" xmlns="http://www.w3.org/2000/svg" version="1.1" className="point" style={{ left: '45px' }}>
                                                <circle cx="5" cy="5" r="5" style={{ fill: '#d9c791' }} />
                                            </svg>
                                        </p>
                                        <h5 className="font_5 margin_bottom_25">台灣之星銷售一條龍</h5>
                                        <span className="description">前端工程師</span>
                                        <br></br>
                                        <span className="sp-Right">
                                            頁面開發 - 獨立完成前端(ReactJs)所有需求<br />
                                        合作模式 - 和後端工程師溝通所需API<br />
                                        主要內容 - 開發門市購商品頁面<br />
                                        </span>
                                    </Container>
                                </ScrollAnimation>
                            </Col>
                        </Row>
                        <div id="line" className="line"></div>

                    </Container>
                </div>
            </section>
        </>
    );
}

export default Experience;