import React from 'react';
import "./Footer.css";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Grid, Slider } from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';


function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img className="footer__albumlogo" src="https://m.media-amazon.com/images/M/MV5BM2NlNzUyODUtZDgyNS00ZjU3LWI5NGUtOWFkYmQwMGVlNGRmXkEyXkFqcGdeQXVyMTE2MTc3MzU1._V1_.jpg" alt="" />
        <div className="footer__songInfo">
          <h4>Yalgaar!</h4>
          <p>CarryMinati</p>
        </div>
      </div>
      <div className="footer__center">
       <ShuffleIcon className="footer__purple" />
       <SkipPreviousIcon className="footer__icon" />
       <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
       <SkipNextIcon className="footer__icon" />
       <RepeatIcon className="footer__purple" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer
