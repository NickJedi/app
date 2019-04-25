import React, { Component } from 'react';
import './index.sass';

const user = {
  id: 1,
  login: 'd1psss',
  password: '123',
  first_name: 'Nico',
  second_name: 'Kovac',
  img: 'https://api.adorable.io/avatars/150/1.png',
  email: 'nico@gmail.com',
  age: 21,
  city: 'Kiev',
  team: '612',
  friends: [],
  courts: [],
  messages: [],
  rating: {
    dribbling: 75,
    passing: 75,
    shooting: 75,
    rebounding: 75,
    defence: 75,
    offence: 75,
    leadership: 75
  }
};

class User extends Component {
  render() {
    return (
      <div className='user'>
        <img src={user.img} alt='avatar'/>
        <h2>{user.first_name} {user.second_name}</h2>
        <h3>{user.login}</h3>
        <p>{user.email}</p>
        <p>Age: {user.age}</p>
        <p>City: {user.city}</p>
        {user.team ? <p>Team: {user.team}</p> : null}

        {/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/}
        {/*         Think about overall rating realization         */}
        {/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/}

        <h3>Rating:</h3>

        <ul>
          {Object.keys(user.rating).map((skill, index) => <li key={index}>{skill}: {user.rating[skill]}</li>)}
        </ul>
      </div>
    );
  }
}

export default User;