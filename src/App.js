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
import $ from 'jquery';

function App(props) {
  const [loading, setLoading] = useState(true);
  const [isFirstIn, setIsFirstIn] = useState(false);
  const [device, setDevice] = React.useState("PC");
  const [_isMounted, set_isMounted] = React.useState(false);

  const handleRWD = () => {
    !_isMounted ? set_isMounted(true) : set_isMounted(false);
    if (window.innerWidth > 768) {
      setDevice("PC");
    }
    else if (window.innerWidth > 576) {
      setDevice("tablet");
    }
    else {
      setDevice("mobile");
    }
  }
  React.useEffect(() => {
    if (!_isMounted) {
      handleRWD();
    }
    window.addEventListener('resize', handleRWD);
    return (() => {
      window.removeEventListener('resize', handleRWD);
    })
  }, []);

  React.useEffect(() => {
    if (!isFirstIn) {
      setIsFirstIn(true);
      let ip = '';
      let location = '';
      let time = '';
      let allThing = '';
      $.ajax({
        url: "https://www.cloudflare.com/cdn-cgi/trace",
        success: function (response) {
          allThing = response.split('=');
          ip = allThing[3];
          ip = ip.substring(0, ip.indexOf('\n'));
          location = allThing[7];
          location = location.substring(0, location.indexOf('\n'));
          time = allThing[4];
          time = time.substring(0, time.indexOf('\n'));
          $.ajax({
            url: "https://script.google.com/macros/s/AKfycbwezhMI0x6Ym5zHRDfeDWrg1zAxMhLcRlXcL8QPwQ/exec",
            data: {
              "ip": ip,
              "location": location,
              "time": time
            },
            success: function (response) {
              if (response == "成功") {
                console.log("Success to Record Ip");
              }
            },
          });
        },
      });
    }

  });

  function setLoaded(loaded) {
    setLoading(loaded);
  }
  return (
    <>
      {loading && <Spinner />}
      <Header device={device}/>
      <Info />
      <Skill />
      <Experience setLoaded={(loaded) => setLoaded(loaded)} device={device}/>
      <ScrollToTop />
      <Footer device={device}/>
    </>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
  }
}
export default connect(mapStateToProps)(App);
