import React from "react";
import { Favorite, MoreHoriz, PlayCircleFilled } from "@material-ui/icons";
import Header from "../Header/";
import SongRow from "../SongRow/";
import { useStateValue } from "../../utils/StateProvider";
import "./style.css";

function Body({ spotify }) {
  const [{ yakum }, dispatch] = useStateValue();

  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img src={yakum?.images[0]?.url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h1>{yakum?.name}</h1>
          <p>{yakum?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilled className="body__shuffle" />
          <Favorite fontSize="large" />
          <MoreHoriz />
        </div>

        {yakum?.tracks?.items?.map((item) => (
          <SongRow key={item.track.id} track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
