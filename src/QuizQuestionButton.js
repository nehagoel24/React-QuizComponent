import React, { Component } from "react";

class QuizQuestionButton extends Component {
  handleClick() {
    this.props.clickHandler(this.props.button_text);
  }
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
                <button onClick={this.handleClick.bind(this)}>
                  {this.props.button_text}
                </button>
              </li>
            </ul>
          </section>
        </main>
      </div>
    );
  }
}

export default QuizQuestionButton;
