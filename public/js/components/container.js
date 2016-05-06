import React from 'react';
import ReactDOM from 'react-dom';

let node = document.getElementById('container');

class Container extends React.Component {
  render(){
    return <div>Containment!</div>;
  }
};


ReactDOM.render(
  <Container />, node
);
