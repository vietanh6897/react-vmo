import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
SongItem.propTypes = {
  song: PropTypes.object,
};
SongItem.defaultProps = {
  song: {
    id: "",
    title: "",
    url: "",
  },
};
function SongItem({ song }) {
  return (
    <div className="song">
      <div className="song_thumbnail">
        <img src={song.url} alt={song.title}></img>
      </div>
      <p className="song_title">{song.title}</p>
    </div>
  );
}

export default SongItem;
