import React, { useState } from 'react';
import './App.css';
import {
  atom,
  RecoilRoot,
  // selector,
  useRecoilState,
  // useRecoilValue,
} from 'recoil';

const usernameState = atom({
  key: 'username',
  default: 'Red',
});

function App() {
  return (
    <RecoilRoot>
      <Nav />
      <Body />
    </RecoilRoot>
  );
}

function Nav() {
  return <div className='nav'></div>;
}

function Body() {
  return (
    <div className='body'>
      <Profile />
    </div>
  );
}

function Profile() {
  const [username, setUsername] = useRecoilState(usernameState);
  return (
    <div>
      <h2>Profile:</h2>
      <p>{username}</p>
      <input
        type='text'
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
    </div>
  );
}

export default App;
