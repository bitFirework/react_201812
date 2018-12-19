import React, { Component } from 'react';
import Title from "./Title";
import CountryList from "./CountryList";
import styles from './styles';
import Footer from './Footer';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg : "World!!",
            list : [
                { no:1, country:'이집트', visited:false },
                { no:2, country:'일본',  visited:true },
                { no:3, country:'피지', visited:false },
                { no:4, country:'콜롬비아', visited:false }
            ]
        }
    }

    createString(x,y) {
        return (<div className="well">{x} + {y} = {x+y}</div>)
    }

    render() {
        let data = { title : '함수형 컴포넌트는 함수처럼 호출할 수 있다.'};
        let data2 = { title : '클래스 기반 컴포넌트'};
        return (
            <div className="container">
                <h1>Hello {this.state.msg}</h1>
                <hr style={styles.dashStyle}></hr>
                { this.createString(4, 5)}
                { Title(data) } 설명 : 함수형 컴포넌트는 JSX에서 함수처럼 사용할 수 있다. React Element에서는 확인하기 어렵다.
                < Title title={data2.title} />
                < CountryList countries={this.state.list} />
                <Footer />
            </div>
        );
    }
}

export default App;