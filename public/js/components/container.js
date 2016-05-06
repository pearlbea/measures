import React from 'react';
import ReactDOM from 'react-dom';

import data from '../data';

import SVGContainer from './SVGContainer';


let node = document.getElementById('container');


class Container extends React.Component {

  constructor(props) {
    super(props);
    this.data = props.data;
  }

  render(){

    return <SVGContainer data={this.props.data} />

  }
};


ReactDOM.render(
  <Container data={data} />, node
);
