import React, { useState } from 'react';
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
  const [loading, setLoading] = useState(true);
  function setLoaded(loaded) {
    setLoading(loaded);
  }
  return (
    <>
      {loading &&
        <div id="loader-wrapper" style={{ opacity: '0.9' }}>
          <div id="loader"><img src='https://i.imgur.com/qo4oWvj.gif' alt="" /></div>
          <div className="loader-section section-left"></div>
          <div className="loader-section section-right"></div>
        </div>
      }
      <Header />
      <section>
        <Info setLoaded={(loaded) => setLoaded(loaded)}/>
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
  }
}
export default connect(mapStateToProps)(App);
