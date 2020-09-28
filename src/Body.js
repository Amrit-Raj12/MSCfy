import React from 'react';
import "./Body.css";
import Header from "./Header";
import { useDataLayerValue } from "./DataLayer";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from "./SongRow";

function Body({ mscfy }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();

  return (
    <div className="body">
      <Header mscfy={mscfy} />

      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icon">
          <PlayCircleFilledIcon className="body__shuffle" />
          <FavoriteIcon fontSize="large" className="" />
          <MoreHorizIcon />
        </div>

        {discover_weekly?.tracks.items.map(item =>(
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
