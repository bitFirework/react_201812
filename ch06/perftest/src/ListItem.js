import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListItem extends Component {

    // 렌더링 최적화 부분
    // shouldComponentUpdate(nextProps, nextState) {
    //     return this.props.no !== nextProps.no ||
    //         this.props.name !== nextProps.name
    // }
    
    render() {
        return (
            <li>{this.props.no} : {this.props.name}</li>
        );
    }
}

ListItem.propTypes = {
    no : PropTypes.number.isRequired,
    name : PropTypes.string.isRequired
};

export default ListItem;