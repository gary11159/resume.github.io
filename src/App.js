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
      let timeStamp = '';
      let allThing = '';
      let os = () => {
        let agent = navigator.userAgent.toLowerCase();
        let isMac = /macintosh|mac os x/i.test(navigator.userAgent);
        if (agent.indexOf("win32") >= 0 || agent.indexOf("wow32") >= 0) {
          return "Windows 32位元"
        }
        if (agent.indexOf("win64") >= 0 || agent.indexOf("wow64") >= 0) {
          return "Windows 64位元"
        }
        if (isMac) {
          return "Mac"
        }
      }
      let resolution = () => {
        let ratio = window.devicePixelRatio || 1;
        return (Math.max(window.screen.width, window.screen.height) * ratio) + 'x' + (Math.min(window.screen.width, window.screen.height) * ratio)
      }
      $.ajax({
        url: "https://www.cloudflare.com/cdn-cgi/trace",
        success: function (response) {
          allThing = response.split('=');
          ip = allThing[3];
          ip = ip.substring(0, ip.indexOf('\n'));
          location = allThing[7];
          location = location.substring(0, location.indexOf('\n'));
          timeStamp = allThing[4];
          timeStamp = timeStamp.substring(0, timeStamp.indexOf('\n')).replace(".", "");
          time = () => {
            let datetime = new Date();
            datetime.setTime(timeStamp);
            let year = datetime.getFullYear();
            let month = datetime.getMonth() + 1;
            let date = datetime.getDate();
            let hour = datetime.getHours();
            let minute = datetime.getMinutes();
            let second = datetime.getSeconds();
            let mseconds = datetime.getMilliseconds();
            return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second + "." + mseconds;
          }
          $.ajax({
            url: "https://script.google.com/macros/s/AKfycbwezhMI0x6Ym5zHRDfeDWrg1zAxMhLcRlXcL8QPwQ/exec",
            data: {
              "ip": ip,
              "location": location,
              "time": time,
              "os": os,
              "resolution": resolution
            },
            success: function (response) {
              if (response == "成功") {
                console.log("Success");
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
      <Header device={device} />
      <Info />
      <Skill />
      <Experience setLoaded={(loaded) => setLoaded(loaded)} device={device} />
      <ScrollToTop />
      <Footer device={device} />
    </>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
  }
}
export default connect(mapStateToProps)(App);
