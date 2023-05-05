import React, { useState } from "react";
import AlbumList from "../components/album";

function AlbumFeature(props) {
  let initAlbumList = [
    {
      id: 1,
      title: "Giai điệu Guitar đem lại cảm giác",
      status: true,
      url: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/e/2/0/1/e20121d239e5536869d4544cbef7a9ae.jpg",
    },
    {
      id: 2,
      title: "Giai điệu Guitar đem lại cảm giác",
      status: true,
      url: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/c/3/5/4/c35434a75006af5f15b365c2201a07a7.jpg",
    },
    {
      id: 3,
      title: "Giai điệu Guitar đem lại cảm giác",
      status: true,
      url: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/5/6/0/d/560d7ce00fade23fc6b54c7b6c09412d.jpg",
    },
  ];
  let [albumList] = useState(initAlbumList);

  return (
    <div>
      <h2>Albums List</h2>
      <AlbumList albumList={albumList}></AlbumList>
    </div>
  );
}

export default AlbumFeature;
