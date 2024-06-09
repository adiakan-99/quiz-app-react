import React from 'react'
import { myBasket } from '../App'

function Homepage() {
    const { stage } = React.useContext(myBasket)

    function startTheQuiz() {
        stage("question")
    }

  return (
    <div style={{textAlign: "center", marginTop: "200px"}}>
        <button onClick={startTheQuiz} className="btn btn-primary">Start Quiz</button>
    </div>
  )
}

export default Homepage