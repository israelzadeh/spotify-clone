import React from "react";
import { HomeOutlined, LibraryMusic, Search } from "@material-ui/icons";
import SidebarOption from "../SidebarOption";
import "./style.css";
import { useStateValue } from "../../utils/StateProvider";

function Sidebar() {
  const [{ playlists, selectedPlaylist }, dispatch] = useStateValue();

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt="spotify logo"
      />
      <SidebarOption Icon={HomeOutlined} title="Home" />
      <SidebarOption Icon={Search} title="Search" />
      <SidebarOption Icon={LibraryMusic} title="Your Library" />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />

      {playlists?.items?.map((playlist) => (
        <SidebarOption key={playlist.id} title={playlist.name} />
      ))}
    </div>
  );
}

export default Sidebar;
