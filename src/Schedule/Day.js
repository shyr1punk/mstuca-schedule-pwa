import React, { Component, PropTypes } from 'react';

import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import { List } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

import Lesson from './Lesson';

export default class Day extends Component {
  render() {
    const { lessons } = this.props;
    const date = this.props.date.format('DD.MM.YYYY');
    const dayOfWeek = this.props.date.format('dddd');
    return (
      <Card style={{margin: '10px'}}>
        <CardHeader
          style={{textTransform: 'capitalize'}}
          title={dayOfWeek}
          subtitle={date}
        />
        {
          lessons && lessons.length ?
            [
              <Divider />,
              <List>
                { lessons.map(lesson => <Lesson {...lesson}/>) }
              </List>
            ] : null
        }
      </Card>
    );
  }
}

Day.propTypes = {
  lessons: PropTypes.array
};
