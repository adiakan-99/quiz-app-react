import React from 'react'
import { myBasket } from '../App';

const questionData = [
    {
        title: "Which of the following is not a JavaScript data type?",
        A: "String",
        B: "Number",
        C: "Boolean",
        D: "Character",
        correctAnswer: "Character"
    },
    {
        title: "What is the purpose of the 'let' keyword in JavaScript?",
        A: "To declare a variable that is block-scoped",
        B: "To declare a constant variable",
        C: "To declare a globally scoped variable",
        D: "To declare a variable that cannot be reassigned",
        correctAnswer: "To declare a variable that is block-scoped"
    },
    {
        title: "Which method is used to create a new array from an existing array in JavaScript?",
        A: "splice()",
        B: "slice()",
        C: "split()",
        D: "join()",
        correctAnswer: "slice()"
    },
    {
        title: "In HTML, which attribute is used to specify the URL of the image?",
        A: "url",
        B: "href",
        C: "src",
        D: "link",
        correctAnswer: "src"
    },
    {
        title: "Which of the following is used to style an HTML document?",
        A: "CSS",
        B: "JavaScript",
        C: "PHP",
        D: "Python",
        correctAnswer: "CSS"
    }
];

function Question(props) {
    const [questionIndex, setQuestionIndex] = React.useState(0);
    const { stage, setMyScore, selectedAnswers, setSelectedAnswers } = React.useContext(myBasket)

    function getNextQuestion() {
        if (questionIndex < selectedAnswers.length) {
            setQuestionIndex(questionIndex + 1);
        } else {
            alert("Please select an answer!")
        }

    }

    function getPreviousQuestion() {
        setQuestionIndex(questionIndex - 1);
    }

    function checkAnswer(event) {
        let selectedAnswer = event.target.value;
        let correctAnswer = questionData[questionIndex].correctAnswer;

        // If no answer was previous selected
        if (selectedAnswers[questionIndex] === undefined) {
            if (selectedAnswer === correctAnswer) {
                setMyScore(prevScore => prevScore + 1);
            }
        } else {
            // If an answer was previously selected

            if (selectedAnswers[questionIndex] !== selectedAnswer) {
                // If the presently selected answer is not the same as the previously selected answer
                if (selectedAnswers[questionIndex] === correctAnswer && selectedAnswer !== correctAnswer) {
                    setMyScore(prevScore => prevScore - 1);
                } else if (selectedAnswers[questionIndex] !== correctAnswer && selectedAnswer === correctAnswer) {
                    setMyScore(prevScore => prevScore + 1);
                }
            }
        }

        // Updating the selected answers array
        setSelectedAnswers(prevAnswers => {
            const newAnswers = [...prevAnswers];
            newAnswers[questionIndex] = selectedAnswer;
            return newAnswers;
        });
    }

    function goToResult() {
        if (questionIndex < selectedAnswers.length) {
            stage("result");
        } else {
            alert("Please select an answer!")
        }
    }

    const buttonStyle = {
        margin: "10px",
        width: "200px"
    };

    return (
        <div>
            {props.children}
            <div className="d-flex flex-column align-items-center justify-content-center" style={{ height: "100vh" }}>
                <h5 className="mb-4">{questionData[questionIndex].title}</h5>
                <div className="d-flex flex-wrap justify-content-center">
                    <button className={`btn ${selectedAnswers[questionIndex] === questionData[questionIndex].A ? 'btn-success' : 'btn-primary'}`} style={buttonStyle} value={questionData[questionIndex].A} onClick={checkAnswer}>{questionData[questionIndex].A}</button>
                    <button className={`btn ${selectedAnswers[questionIndex] === questionData[questionIndex].B ? 'btn-success' : 'btn-primary'}`} style={buttonStyle} value={questionData[questionIndex].B} onClick={checkAnswer}>{questionData[questionIndex].B}</button>
                    <button className={`btn ${selectedAnswers[questionIndex] === questionData[questionIndex].C ? 'btn-success' : 'btn-primary'}`} style={buttonStyle} value={questionData[questionIndex].C} onClick={checkAnswer}>{questionData[questionIndex].C}</button>
                    <button className={`btn ${selectedAnswers[questionIndex] === questionData[questionIndex].D ? 'btn-success' : 'btn-primary'}`} style={buttonStyle} value={questionData[questionIndex].D} onClick={checkAnswer}>{questionData[questionIndex].D}</button>
                </div>
                <div className="mt-4">
                    {
                        (questionIndex > 0 && <button className="btn btn-dark mr-2" style={{ marginRight: "5px" }} onClick={getPreviousQuestion}><i class="fa-solid fa-chevron-left"></i> Previous</button>)
                    }
                    {
                        (questionIndex === questionData.length - 1) ?
                            <button className="btn btn-success" onClick={goToResult}>Submit</button> :
                            <button className="btn btn-dark ml-2" style={{ marginRight: "5px" }} onClick={getNextQuestion}>Next <i class="fa-solid fa-chevron-right"></i></button>
                    }
                </div>
            </div>
        </div>

    )

}

export default Question