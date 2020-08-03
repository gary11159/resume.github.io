import Container from 'react-bootstrap/Container';
import { connect } from 'react-redux';
import { setTabName } from '../actions/app';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Navbar, Nav } from 'react-bootstrap';
import InfoImg from '../public/info.png';
import SkillImg from '../public/skill.png';
import ExperienceImg from '../public/experience.png';
import './header.css';
function Header(props) {
    function scrollHandle(e, type) {
        let target = document.getElementById(type);
        if (window.scrollTo) {
            e.preventDefault()
            if (target !== undefined && target !== null) {
                window.scrollTo({ 'behavior': 'smooth', 'top': target.offsetTop });
            }
        }
    }

    return (
        <>
            <div className="header">
                <Container>
                    <Navbar>
                        <Navbar.Brand className="hvr-wobble-horizontal"><span className="fs32">Gary Yang</span><br />gary11159@gmail.com</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav.Link href="#info" className="hvr-wobble-horizontal" onClick={(e) => scrollHandle(e, 'info')}><img src={InfoImg} alt="infoIcon" /><span className="black"> Info</span></Nav.Link>
                            <Nav.Link href="#skill" className="hvr-wobble-horizontal" onClick={(e) => scrollHandle(e, 'skill')}><img src={SkillImg} alt="skill" /><span className="black"> Skill</span></Nav.Link>
                            <Nav.Link href="#experience" className="hvr-wobble-horizontal" onClick={(e) => scrollHandle(e, 'experience')}><img src={ExperienceImg} alt="experience" /><span className="black">Experience</span></Nav.Link>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </div>
        </>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        ownProps,
        ingTabName: state.statusReducer.ingTabName,
    }
}
const mapDispatchToProps = (dispatch, ownProps) => ({
    setTabName: (val) => dispatch(setTabName(val)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);