import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class MyButton extends PureComponent {

    // shouldComponentUpdate(nextProps, nextState) {
    //     return false; //MyButton의 경우 변경될 일이 없으니 false를 기본으로 지정해준다.
    // }

    render() {
        console.log("### MyButton 컴포넌트 렌더");
        return (
            <button className="btn btn-default" onClick={() => this.props.addItem() }>
                Add Item!!
            </button>
        );
    }
}

MyButton.propTypes = {
    addItem: PropTypes.func.isRequire
}

export default MyButton;