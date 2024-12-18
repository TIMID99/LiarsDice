import React from "react";

const maxPlayerCount = 6;

function Lobby({ lobbyId }) {
  return (
    <div>
      <h2>Lobby ID: {lobbyId}</h2>
      <p>플레이어 수: {numPlayers}/maxPlayerCount</p>
      


    </div>
  );
}

export default Lobby;