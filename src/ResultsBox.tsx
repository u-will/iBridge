import React from 'react';
import "./ResultsBox.css";


interface ResultsProps{
    name: string,
    score: string,
    questionNumber: string,
    answerRecap: string,
    correctAnswer?:string,
    incorrectStatement?:string,
}

class ResultsBox extends React.Component<ResultsProps,{}> {

    render() { 
        return ( 
            <div className="Results" >
                <h1>{this.props.name}</h1>
                <h2 className="ScoreMessage">You got <h2 className="ScoreNumber">{this.props.score}/{this.props.questionNumber}</h2> correct!</h2>
                <div className="AnswerMessage">
                    <p className="pAnswerMessage"><b>{this.props.incorrectStatement}</b></p>
                    <p className="CorrectAnswerText">{this.props.correctAnswer}</p>
                    <p className="pAnswerMessage">{this.props.answerRecap}</p>
                </div>
            </div>
        )
    }
 }

 export default ResultsBox