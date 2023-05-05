import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import SongItem from "../songs";
AlbumList.propTypes = {
  albumList: PropTypes.array,
};
AlbumList.defaultProps = {
  albumList: [],
};

function AlbumList({ albumList }) {
  return (
    <ul className="album-list">
      {albumList.map((item) => (
        <li key={item.id}>
          <SongItem song={item}></SongItem>
        </li>
      ))}
    </ul>
  );
}

export default AlbumList;
