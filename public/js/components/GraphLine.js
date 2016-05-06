import React from 'react';

export default class GraphLine extends React.Component {

  render() {
    return <line
      key={this.props.item.id}
      x1="0"
      x2="100%"
      y1={(this.props.item.value*50)}
      y2={(this.props.item.value*50)}
      stroke="orange"
      fill="transparent"
      stroke-width="5" />
  }
}
