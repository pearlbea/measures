import React from 'react';
import {random} from 'lodash';


import GraphLine from './GraphLine';

export default class SVGContainer extends React.Component {

  constructor(props) {
    super(props);
    this.data = props.data;
  }

  jiggle() {
    return random(-1.0, 1.0);
  }

  seeThrough() {
    return 0.3;
  }

  render(){
    return(
    <svg
      version="1.1"
      baseProfile="full"
      width="300" height="300"
      xmlns="http://www.w3.org/2000/svg">

      {this.props.data.map((item) => {
        var jiggle = this.jiggle();
        return <GraphLine key={item.id} item={item} />
      })}
    </svg>
  )

  }
};
