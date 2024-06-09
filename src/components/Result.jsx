import React from 'react'
import { myBasket } from '../App'

function Result() {
    const { stage, myScore, setMyScore, setSelectedAnswers } = React.useContext(myBasket);

    function restartQuiz() {
        setMyScore(0);
        setSelectedAnswers([]);
        stage("home");
    }

  return (
    <div style={{textAlign: "center", marginTop: "150px"}}>
        <h2 className="display-2">Your score is: {myScore}</h2>
        <button className='btn btn-success' onClick={restartQuiz}>Restart Quiz</button>
    </div>
  )
}

export default Result