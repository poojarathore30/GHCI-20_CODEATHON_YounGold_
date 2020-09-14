import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import yg from './YG.PNG'

import './Join.css';

const Join = () => {

  const [name,setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
      <img className="logo" src={yg} alt="logo"/>
        <h2 className="heading">Messenger</h2>
        <div><input placeholder="Enter your Name" className="joinInput input-box" type="text" onChange={(event)=> setName(event.target.value)}></input></div>
        <div><input placeholder="Enter Room Code" className="joinInput mt-20 input-box" type="text" onChange={(event)=> setRoom(event.target.value)}></input></div>
        <Link onClick={(event)=>(!name || !room)?event.preventDefault():null} to={`/chat?name=${name}&room=${room}`}>
          <button className="button mt-20" type="submit">Join Chat</button>
        </Link>
      </div>
    </div>
  )
}

export default Join;
