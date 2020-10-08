import React from "react";
import { loginUrl } from "../../utils/spotify";
import "./style.css";

function Login() {
  return (
    <div className="login">
      <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" />
      <a href={loginUrl}>LOGIN</a>
    </div>
  );
}

export default Login;
