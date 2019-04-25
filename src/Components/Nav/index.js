import React, { Component } from 'react';
import './index.sass';

class Nav extends Component {
  render() {
    return (
      <div className='nav'>
        <input className='search-bar' type='text' placeholder='search'/>
        <ul className='navigation'>
          {/*<li><a href='#'>My profile</a></li>*/}
          {/*<li><a href='#'>My friends</a></li>*/}
          {/*<li><a href='#'>My messages</a></li>*/}
          <li><a href='#'>My courts</a></li>
        </ul>
      </div>
    );
  }
}

export default Nav;