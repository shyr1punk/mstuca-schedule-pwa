import React, { Component, PropTypes } from 'react';

import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import { List } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

import Pair from './Pair';

/**
 * Отображение одного дня занятий
 */
export default class Day extends Component {
  render() {
    const { lessons } = this.props;
    const date = this.props.date.format('DD.MM.YYYY');
    const dayOfWeek = this.props.date.format('dddd');
    const pairs = lessons && lessons.length ? lessons.reduce((result, lesson) => {
      if (result[lesson.number]) {
        result[lesson.number].push(lesson);
      } else {
        result[lesson.number] = [lesson];
      }
      return result;
    }, {}) : null;

    return (
      <Card style={{margin: '10px'}}>
        <CardHeader
          style={{textTransform: 'capitalize'}}
          title={dayOfWeek}
          subtitle={date}
        />
        {
          pairs &&
          [
            <Divider />,
            <List>
              { Object.keys(pairs).map(number =>
                <Pair lessons={pairs[number]} number={number}/>
              ) }
            </List>
          ]
        }
      </Card>
    );
  }
}

Day.propTypes = {
  lessons: PropTypes.array
};
