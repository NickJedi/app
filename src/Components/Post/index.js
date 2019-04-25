import React, { Component } from 'react';
import './index.sass';

const post = {
  id: 1,
  author: 'Nico Kovac',
  date: '15.04.19 23:00',
  message: 'Hello there. It\'s prototype of my app.',
  img: null,
  video: null,
  audio: null
};

class Post extends Component {
  render() {
    return (
      <div className='post'>
        <h3>{post.author}</h3>
        <h6>{post.date}</h6>
        <p>{post.message}</p>
        {post.img ? <img src={post.img} alt='post screen'/> : null}

        {/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/}
        {/*    Think about realization video and audion in app**/    }
        {/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/}

        {post.video ? <video src={post.video} /> : null}
        {post.img ? <audio src={post.audio} /> : null}



        <button>Like</button>
        <button>Copy</button>
      </div>
    );
  }
}

export default Post;