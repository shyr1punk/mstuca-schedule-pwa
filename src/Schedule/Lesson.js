import React, { Component, PropTypes } from 'react';

import { TableRow, TableRowColumn } from 'material-ui/Table';

export default class Lesson extends Component {
  render() {
    console.log(this.props);
    return (
      <TableRow>
        <TableRowColumn>{this.props.number}</TableRowColumn>
        <TableRowColumn style={{whiteSpace: 'initial'}}>{this.props.subject}</TableRowColumn>
        <TableRowColumn>{this.props.auditory}</TableRowColumn>
      </TableRow>
    );
  }
}

Lesson.propTypes = {
  number: PropTypes.number,
  subject: PropTypes.string,
  auditory: PropTypes.string
};
