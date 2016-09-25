import React, { Component, PropTypes } from 'react';

import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

import Lesson from './Lesson';

export default class Day extends Component {
  render() {
    const date = this.props.date.format('DD.MM.YYYY');
    const dayOfWeek = this.props.date.format('dddd');
    return (
      <Card>
        <CardHeader>
          {date} {dayOfWeek}
        </CardHeader>
        <Table selectable={false} className='schedule-table'>
          <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn>№</TableHeaderColumn>
              <TableHeaderColumn>Предмет</TableHeaderColumn>
              <TableHeaderColumn>Аудитория</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {this.props.lessons.map(lesson => <Lesson {...lesson}/>)}
          </TableBody>
        </Table>
      </Card>
    );
  }
}

Day.propTypes = {
  lessons: PropTypes.array
};
