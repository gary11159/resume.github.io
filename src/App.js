import React from 'react';
import { connect } from 'react-redux';
import { Animate, AnimateKeyframes } from 'react-simple-animate';
import './App.css';
import './css/hover.css';
import './css/hover-min.css';
import Footer from './components/footer';
import Header from './components/header';
import Info from './components/info';
import Experience from './components/experience';
import Skill from './components/skill';
import { Container } from 'react-bootstrap';
// import 'animate.css/animate.css';
import './css/animate.css/animate.min.css';
import './css/animate.css/animate.css';

function App(props) {
  const { ingTabName } = props;
  React.useEffect(() => {

  })
  return (
    <>
      <Header />
      <section>
        <Info />
      </section>
      <section style={{ zIndex: 100 }}>
        <Skill />
      </section>
      <section style={{ zIndex: 200 }}>
        <Experience />
      </section>

      <Footer />
    </>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    ownProps,
    ingTabName: state.statusReducer.ingTabName,
  }
}
export default connect(mapStateToProps)(App);
