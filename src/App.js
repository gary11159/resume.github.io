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
import ScrollToTop from './components/scrollToTop';
import Spinner from './components/spinner';

function App(props) {
  const [loading, setLoading] = useState(true);
  function setLoaded(loaded) {
    setLoading(loaded);
  }
  return (
    <>
      {loading && <Spinner />}
      <Header />
      <Info />
      <Skill />
      <Experience setLoaded={(loaded) => setLoaded(loaded)} />
      <ScrollToTop />
      <Footer />
    </>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
  }
}
export default connect(mapStateToProps)(App);
