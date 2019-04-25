import React, { Component } from 'react';
import User from './User';
import ProjectTitle from './ProjectTitle';
import Nav from './Nav'
import Main from './Main'
import './app.sass';

class App extends Component {
  render() {
    return (
      <>
        <header>
          <ProjectTitle />
          <Nav />
        </header>
        <main>
          <User />
          <Main />
        </main>
      </>
    );
  }
}

export default App;