import React, { Component } from "react";

class QuizQuestionButton extends Component {
  render() {
    return (
      <div>
        <main>
          <section>
            <p></p>
          </section>
          <section className="buttons">
            <ul>
              <li>
                <button>{this.props.button_text}</button>
              </li>
            </ul>
          </section>
        </main>
      </div>
    );
  }
}

export default QuizQuestionButton;
