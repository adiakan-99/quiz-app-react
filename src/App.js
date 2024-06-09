import { createContext, useState } from "react";
import Homepage from "./components/Homepage";
import Question from "./components/Question";
import Result from "./components/Result";
import Timer from "./components/Timer";

export const myBasket = createContext()

function App() {
  const [gameStage, setGameStage] = useState("home");

  const [score, setScore] = useState(0);

  const [selectedAnswers, setSelectedAnswers] = useState([]);

  return (
    <div>
      <myBasket.Provider value={{ stage: setGameStage, myScore: score, setMyScore: setScore, selectedAnswers, setSelectedAnswers }}>
        {gameStage === "home" && <Homepage />}
        {gameStage === "question" && <Question><Timer /></Question>}
        {gameStage === "result" && <Result />}
      </myBasket.Provider>
    </div>
  );
}

export default App;
