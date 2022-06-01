import React, { Component } from "react";
class Solution extends Component {
    render() {
        let arr = []
        for (let i = 0; i < 4; i++) {
            arr.push("_ ")
        }
        return (
            <div>
                <div>{arr}</div>
                <div>Your ideal moon when coding</div>
            </div>
        )
    }
}

export default Solution;