import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputName extends Component {
    constructor(props) {
        super(props);
        this.changeName = this.changeName.bind(this);
    }
    
    changeName(e) {
        this.props.changeName(e.target.value);
    }

    // 위의 bind를 하는 방법도 있지만, 아래처럼 arrow function 을 써서 해도 동일하다.
    // changeName = (e) => {
    //     this.props.changeName(e.target.value);
    // }

    render() {
        return (
            <div className="row">
                <div className="col">
                    <div className="input-group">
                        <input id="name" type="text" className="form-control" name="name"
                        placeholder="Type name and Enter!" value={this.props.name} 
                        onChange={this.changeName} />
                        <span className="btn btn-primary input-group-addon"
                        onClick={this.props.searchContact}>검{' '}색</span>
                    </div>
                </div>
            </div>
        );
    }
}

InputName.propTypes = {
    searchContact: PropTypes.func.isRequired,
    changeName: PropTypes.func.isRequired,
    name: PropTypes.string
};

export default InputName;