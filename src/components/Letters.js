import React, { Component } from "react";
import Letter from "./Letter"
class Letters extends Component {
    constructor() {
        super();
    }
    clickLetter = (letter) => {
        this.props.clickLetter(letter);
    };

    render() {
        return <div>
            <div>Available Letters:</div>
            {Object.keys(this.props.letterStatus).map(l => this.props.letterStatus[l] ?
                (<Letter className="selected" key={l} letter={l} clickLetter={this.clickLetter} />) :
                (<Letter className="not-selected" key={l} letter={l} clickLetter={this.clickLetter} />))}

        </div>;
    }
}

export default Letters;