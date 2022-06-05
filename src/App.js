
import './App.css';
import Solution from "./components/Solution"
import Score from "./components/Score"
import Letters from "./components/Letters"
import EndGame from "./components/EndGame"
import { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    let letterStatus = this.generateLetterStatuses();
    this.state = {
      letterStatus: letterStatus,
      solution: {
        word: "ROSE",
        hint: "a red flower name"
      },
      score: "100",
      isGameDone: false,
      result: "",
    }
  }
  renderSolution = () => {
    let myWord = "";
    for (let letter of this.state.solution.word) {
      if (this.state.letterStatus[letter] === true) {
        myWord += letter;
      } else {
        myWord += "_ ";
      }
    }
    return myWord;
  };


  clickLetter = (letter) => {
    let myWord;
    let changeLetterStatus = { ...this.state.letterStatus };

    if (this.state.solution.word.includes(letter)) {
      this.setState({ score: this.state.score + 10 });
    } else {
      this.setState({ score: this.state.score - 20 });
    }
    if (this.state.score <= 0) {
      this.setState({ isGameDone: true, result: "LOSE!" });
    }
    myWord = this.renderSolution();
    if (myWord === this.state.solution.word) {
      this.setState({ isGameDone: true, result: "WON!" });
    }

    changeLetterStatus[letter] = true;
    this.setState({ letterStatus: changeLetterStatus });
  };

  generateLetterStatuses() {
    let letters = {};
    for (let i = 65; i < 91; i++) {
      letters[String.fromCharCode(i)] = false
    }
    return letters
  }

  render() {
    return (
      <div>
        {!this.state.isGameDone ? (
          <div>
            <Score score={this.state.score} />
            <Solution key={1} renderSolution={this.renderSolution} hint={this.state.solution.hint} />
            <Letters letterStatus={this.state.letterStatus} clickLetter={this.clickLetter} />
          </div>
        ) : (
            <EndGame msg={this.state.result} />
          )}
      </div>
    );
  }

}

export default App;
