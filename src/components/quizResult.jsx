import React from "react";
import questions from "./quizData";

const QuizResult = (props) => {
    return (
        <div className="score-section">
            <h2>Completed!</h2>
            <h4>Total Score {props.score}/35</h4>
            <h4>Your Correct Question {props.CorrectAns} out of {questions.length}</h4>
            <button onClick={props.handlePlayAgain}>attempt again</button>
        </div>
    )
}

export default QuizResult