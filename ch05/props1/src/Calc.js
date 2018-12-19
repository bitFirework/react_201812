import React, { Component } from 'react';
import { PropTypes } from "prop-types";

class Calc extends Component {
    // case2
    //static propTypes = {}
    render() {
        let result = 0;
        switch(this.props.oper) {
            case "+" :
                result = parseFloat(this.props.x) + parseFloat(this.props.y);
                break;
            case "*" : 
                result = parseFloat(this.props.x) * parseFloat(this.props.y);
                break;
            default :
                result = 0;
        }

        return (
            <div>
                <h3>연산 방식 : { this.props.oper }</h3>
                <hr />
                <div>
                    {this.props.x} {this.props.oper} {this.props.y}
                        = {result}
                 </div>
            </div>
        );
    }
}

// case1 : 시각적으로 좋아서 강사님이 추천하는 방법
Calc.propTypes = {
    x : PropTypes.number.isRequired,
    y : PropTypes.number.isRequired,
    oper : PropTypes.oneOf(['+', '*'])
    // oper : (props, pName, cName) => {
    //     if (props[pName] !== "+" || props[pName] !== "*") {
    //         return new Error(`${pName} 속성은 +,* 만 허용합니다!`);
    //     }
    // }
}

Calc.defaultProps = {
    x : 0,
    y : 0,
    oper : "+"
}

export default Calc;