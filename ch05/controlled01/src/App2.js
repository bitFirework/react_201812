import React, { Component } from 'react';

class App2 extends Component {
    constructor(props) {
        super(props);
        this.state = { x:0, y:0 };
    }

    add = () => {
        let x = parseInt(this.elemX.value);
        let y = parseInt(this.elemY.value);
        if (isNaN(x)) x=0;
        if (isNaN(y)) y=0;
        this.setState({x: x, y: y, result: x+y});
    }

    render() {
        return (
            <div>
                X : <input id="x" ref={(input) => { this.elemX = input;}} type="text" defaultValue={this.state.x} /><br/>
                Y : <input id="y" ref={(input) => { this.elemY = input;}} type="text" defaultValue={this.state.y} /><br/>
                <button onClick={this.add}>덧셈계산</button>
                결과 : <span>{ this.state.x + this.state.y }</span>
            </div>
        );
    }
}

export default App2;