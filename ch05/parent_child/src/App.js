import React, { Component } from 'react';
import MyButton from './MyButton';
import List from "./List";
import produce from 'immer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { itemlist: [] };
  }
  
  //강사님 : 현재 예제에서 bind 거는 건 잘못된 예제임. (이렇게 하면 안된다는 걸 알려주기 위해서 일부러 넣은거임)
  addItem() {
    if (!this.num) this.num = 0;
    this.num++;
    let newItemList = produce(this.state.itemlist, (draft) => {
      draft.push({ no: new Date().getTime(), item: "아이템" + this.num});
    });
    this.setState({ itemlist: newItemList });
  }

  render() {
    return (
      <div className="container">
        <div className="well">
          <MyButton addItem={this.addItem.bind(this)} /> 
          강사님 : 현재 예제에서 bind 거는 건 잘못된 예제임. (이렇게 하면 안된다는 걸 알려주기 위해서 일부러 넣은거임)
          <List itemlist={this.state.itemlist} />
        </div>
      </div>
    );
  }
}

export default App;