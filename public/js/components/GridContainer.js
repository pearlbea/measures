import React from 'react';
import { range, each } from 'lodash';

import GridSquare from './GridSquare';


export default class GridContainer extends React.Component {

  constructor(props) {
    super(props);
    this.rows = props.rows;
    this.columns = props.columns;
  }


  render() {
    return <table>
      <tbody>
        {this.rows.map((row) => {
            return (<tr key={row}>
          {this.columns.map((column) => {
             return <td key={(row, column)}>wooo</td>
          })}
          </tr>)
        })}
      </tbody>
    </table>
  }
}
