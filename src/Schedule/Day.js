import React, { Component, PropTypes } from 'react';

import { TableBody } from 'material-ui/Table';

import { Lesson } from './Lesson';

export default class Lesson extends Component {
  render() {
    const date = this.props.date;
    const dayOfWeek = this.props.date;
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

Lesson.propTypes = {
  number: PropTypes.number,
  lesson: PropTypes.string,
  auditory: PropTypes.string
};
