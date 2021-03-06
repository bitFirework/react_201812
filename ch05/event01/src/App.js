import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0
    };
    // bind(this)는 생성자쪽에서 하는 걸 권한다.
    this.add = this.add.bind(this);
  }
  
  add() {
    this.setState({ num: this.state.num + 1 })
  };
  
  subtract = () => {
    this.setState({ num: this.state.num - 1 })
  };


  render() {
    return (
      <div className="well">
          <span className="input-group-btn">
            <button type="button" className="btn btn-primary" 
              onClick={ this.subtract}>
              <span className="glyphicon glyphicon-minus"></span>
            </button>
            <button type="button" className="btn btn-primary" 
              onClick={this.add}>
              <span className="glyphicon glyphicon-plus"></span>
            </button>
            <input type="text" className="form-control input-number" value={this.state.num} />
          </span>
      </div>
    );
  }
}

export default App;