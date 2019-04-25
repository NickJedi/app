import React, { Component } from 'react';
import Post from '../Post'
import './index.sass';

class Main extends Component {
  render() {
    return (
      <div className='wall'>
        <Post />
        <Post />
        <Post />
      </div>
    );
  }
}

export default Main;