import React, { useState } from "react";

const GameContainer = ({num1, num2, sum, score }) => {

    const [gamenum1, setNum1] = useState(num1);
    const [gamenum2, setNum2] = useState(num2);
    const [gamesum, setSum] = useState(sum);
    const [gamescore, setScore] = useState(score);
  
    const generateQuestion = () => {
      setNum1(Math.ceil(Math.random() * 10));
      setNum2(Math.ceil(Math.random() * 10));
    };
  
    const submit = (e) => {
      e.preventDefault();
      const formValid = +sum >= 0;
      if (!formValid) {
        return;
      }
      if (+gamenum1 + +gamenum2 === +gamesum) {
        setScore((gamescore) => gamescore + 1);
      }
      generateQuestion();
    };
  
  return (
    <div>
         <form onSubmit={submit}>
        <div>
          <label>
            {gamenum1} + {gamenum2}
          </label>
          <input value={gamesum} onChange={(e) => setSum(e.target.value)} />
        </div>

        <button type="submit">check</button>
      </form>
      <button type="button" onClick={generateQuestion}>
        start game
      </button>
      <p>score: {gamescore}</p>
    </div>
  )
}

export default GameContainer;