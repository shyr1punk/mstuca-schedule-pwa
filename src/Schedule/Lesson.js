import React, { Component, PropTypes } from 'react';

import { TableRow, TableRowColumn } from 'material-ui/Table';

export default class Lesson extends Component {
  render() {
    return (
      <TableRow>
        <TableRowColumn>{this.props.number}</TableRowColumn>
        <TableRowColumn style={{whiteSpace: 'initial'}}>{this.props.lesson}</TableRowColumn>
        <TableRowColumn>{this.props.auditory}</TableRowColumn>
      </TableRow>
    );
  }
}

Lesson.propTypes = {
  number: PropTypes.number,
  lesson: PropTypes.string,
  auditory: PropTypes.string
};
