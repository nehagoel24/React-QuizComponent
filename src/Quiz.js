import React, { Component } from "react";
import QuizQuestion from "./QuizQuestion.js";

let quizData = require("./quiz_data.json");

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz_position: 1,
    };
  }
  render() {
    let quizPosition = this.state.quiz_position;
    let quizSelected = quizPosition - 1;
    return (
      <div>
        <div className="QuizQuestion">
          <QuizQuestion quiz_question={quizData.quiz_position[quizPosition]} />
        </div>
      </div>
    );
  }
}

export default Quiz;
