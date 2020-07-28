import React from 'react';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Content from './components/content'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Switch>
            <Route path="/" render={props => <Content {...props} />} />
          </Switch>
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
