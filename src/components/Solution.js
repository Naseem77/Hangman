import React, { Component } from "react";
import Letter from "./Letter"
class Solution extends Component {
    constructor() {
        super()
        this.count = {
            count: 0
        }
    }
    renderSolution() {
        return this.props.renderSolution();
    }
    render() {

        return (
            <div>
                {this.renderSolution()}
                <div>{this.props.hint}</div>
            </div>
        )
    }
}

export default Solution;



{/* <div>
    {this.props.showSolution === true ?
        (this.props.solution.word.split('').map(w => <Letter letter={w} key={w} />))
        : (this.props.solution.word.split('').map(w => <Letter letter={"_ "} key={this.count.count++} />))
    }

    <div>{this.props.solution.hint}</div>
</div> */}