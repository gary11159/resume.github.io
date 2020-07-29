import Container from 'react-bootstrap/Container';
import { connect } from 'react-redux';
import { setTabName } from '../actions/app';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../logo.svg';
import { Navbar, Nav } from 'react-bootstrap';
import InfoImg from '../public/info.png';
import SkillImg from '../public/skill.png';
import ExperienceImg from '../public/experience.png';
import './header.css';
class Header extends React.Component {
    render() {
        const { setTabName } = this.props;
        return (
            <>
                <div className="header">
                    <Container>
                        <Navbar>
                            <Navbar.Brand className="fs32 hvr-wobble-horizontal" onClick={() => setTabName('intro')}>Gary Yang</Navbar.Brand>
                            <Navbar.Toggle />
                            <Navbar.Collapse className="justify-content-end">
                                <Nav.Link className="hvr-wobble-horizontal" onClick={() => setTabName('info')}><img src={InfoImg} /><span className="black"> Info</span></Nav.Link>
                                <Nav.Link className="hvr-wobble-horizontal" onClick={() => setTabName('skill')}><img src={SkillImg} /><span className="black"> Skill</span></Nav.Link>
                                <Nav.Link className="hvr-wobble-horizontal" onClick={() => setTabName('experience')}><img src={ExperienceImg} /><span className="black">Experience</span></Nav.Link>
                            </Navbar.Collapse>
                        </Navbar>
                    </Container>
                </div>
            </>
        );
    }
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