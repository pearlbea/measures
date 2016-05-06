import React from 'react';
import ReactDOM from 'react-dom';

import { range } from 'lodash'

import data from '../data';

import GridContainer from './GridContainer';

let node = document.getElementById('container');


class Container extends React.Component {

  constructor(props) {
    super(props);
    this.data = props.data;
  }

  render(){
    return <GridContainer data={this.props.data} rows={range(5)} columns={range(8)} />
  }
};


ReactDOM.render(
  <Container data={data} />, node
);
