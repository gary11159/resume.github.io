import React from 'react';
import './App.css';
import Footer from './components/footer'
import Header from './components/header'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}

export default App;
