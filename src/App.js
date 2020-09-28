import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './mscfy';
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

const mscfy = new SpotifyWebApi();


function App() {
  const [{ user, token }, dispatch]= useDataLayerValue();

  useEffect(()=> {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })

      mscfy.setAccessToken(_token);

      mscfy.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user : user,
        });
      });

      mscfy.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      mscfy.getPlaylist('1DEFWP1nfhoHrFb4dLZ2lN').then(response =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );
    }
  }, []);


  return (
    <div className="app">
    {
      token ?
        <Player mscfy={mscfy} />
         :
        <Login />
      }
    </div>
  );
}

export default App;
