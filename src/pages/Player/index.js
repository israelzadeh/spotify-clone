import React from "react";
import Sidebar from "../../components/Sidebar/index";
import Body from "../../components/Body/index";
import Footer from "../../components/Footer";
import "./style.css";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body spotify={spotify} />
      </div>
      <Footer />
    </div>
  );
}

export default Player;
