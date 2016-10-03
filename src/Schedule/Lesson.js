import React, { Component, PropTypes } from 'react';

import { TableRow, TableRowColumn } from 'material-ui/Table';
import './lesson.css';

export default class Lesson extends Component {
  render() {
    let cl = '';
    switch (this.props.lesson_type) {
      case 'Лекция':
        cl = 'lesson--lection';
        break;
      case 'Пр.Зан.':
        cl = 'lesson--prac';
        break;
      case 'Лаб.раб.':
        cl = 'lesson--lab';
        break;
      default:
        cl = '';
    }
    return (
      <TableRow className={cl}>
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
