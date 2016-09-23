import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import './schedule.css';

class Menu extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardHeader>
            Расписание
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
              <TableRow>
                <TableRowColumn>1</TableRowColumn>
                <TableRowColumn style={{whiteSpace: 'initial'}}>Физика</TableRowColumn>
                <TableRowColumn>{'4-203'}</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>2</TableRowColumn>
                <TableRowColumn style={{whiteSpace: 'initial'}}>Химия</TableRowColumn>
                <TableRowColumn>{'123б'}</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>3</TableRowColumn>
                <TableRowColumn style={{whiteSpace: 'initial'}}>Программирование на языках высокого уровня</TableRowColumn>
                <TableRowColumn>{'2-304'}</TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>4</TableRowColumn>
                <TableRowColumn style={{whiteSpace: 'initial'}}>Физическая культура</TableRowColumn>
                <TableRowColumn>{'****'}</TableRowColumn>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </div>
    );
  }
}

export default Menu;
