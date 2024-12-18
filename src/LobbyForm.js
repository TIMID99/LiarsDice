import React, { useState } from "react";

function LobbyForm({ createLobby, joinLobby }) {
  const [joinId, setJoinId] = useState("");

  const handleJoin = () => {
    if (joinId) {
      joinLobby(parseInt(joinId, 10));
    }
  };

  return (
    <div>
      <button onClick={createLobby}>로비 생성</button>
      <div>
        <input
          type="text"
          placeholder="로비 번호를 입력하세요"
          value={joinId}
          onChange={(e) => setJoinId(e.target.value)}
        />
        <button onClick={handleJoin}>로비 입장</button>
      </div>
    </div>
  );
}

export default LobbyForm;