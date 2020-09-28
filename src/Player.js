import React from 'react';
import './Player.css';
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";

function Player({ mscfy }) {
  return (
    <div className="player">
        <div className="player__body">
          <Sidebar />
          <Body mscfy={mscfy} />
        </div>
        <Footer />
    </div>
  )
}

export default Player;
