import React, { useState } from 'react';

function LiarsDice() {
  // 상태 관리
  const [redNumber, setRedNumber] = useState(1); // 빨간 숫자
  const [purpleNumber, setPurpleNumber] = useState(1); // 보라 숫자
  const [targetNumber, setTargetNumber] = useState(1); // 노란 숫자 (제출된 숫자)
  const [countNumber, setCountNumber] = useState(1); // 보라 숫자 (제출된 개수)
  const [turnsLeft, setTurnsLeft] = useState(3); // 남은 턴 수

  // 빨간 숫자 변경 함수
  const changeRedNumber = (direction) => {
    setRedNumber((prev) => {
      if (direction === "left") return prev === 1 ? 6 : prev - 1;
      if (direction === "right") return prev === 6 ? 1 : prev + 1;
      return prev;
    });
  };

  // 보라 숫자 변경 함수
  const changePurpleNumber = (direction) => {
    setPurpleNumber((prev) => {
      if (direction === "left") return prev === 1 ? 1 : prev - 1;
      if (direction === "right") return prev + 1;
      return prev;
    });
  };

  // 제출 버튼 이벤트
  const handleSubmit = () => {
    // targetNumber와 countNumber 업데이트
    setTargetNumber(redNumber);
    setCountNumber(purpleNumber);

    // 턴 감소
    setTurnsLeft((prev) => (prev > 0 ? prev - 1 : 0));

    alert(`제출: 숫자 ${redNumber}, ${purpleNumber}개 이상`);
  };

  // 거짓 버튼 이벤트
  const handleBluff = () => {
    alert("거짓 주장!");
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'Arial' }}>
      {/* 남은 턴 표시 */}
      <h2>본인 턴까지 {turnsLeft}턴 남았습니다</h2>

      {/* 현재 주장 상태 */}
      <h3>???플레이어가 {targetNumber}이/가 {countNumber}개 이상이라고 주장합니다</h3>

      {/* 숫자 조작 패널 */}
      <div style={{ fontSize: '24px', margin: '20px 0' }}>
        {/* 빨간 숫자 */}
        <button onClick={() => changeRedNumber("left")}>◀</button>
        <span style={{ margin: '0 10px', color: 'red' }}>{redNumber}</span>
        <button onClick={() => changeRedNumber("right")}>▶</button>

        {/* 보라 숫자 */}
        <button onClick={() => changePurpleNumber("left")} style={{ marginLeft: '20px' }}>◀</button>
        <span style={{ margin: '0 10px', color: 'purple' }}>{purpleNumber}</span>
        <button onClick={() => changePurpleNumber("right")}>▶</button>
      </div>

      {/* 버튼 패널 */}
      <div>
        <button onClick={handleSubmit}>제출</button>
        <button onClick={handleBluff} style={{ marginLeft: '10px' }}>거짓</button>
      </div>
    </div>
  );
}

export default LiarsDice;