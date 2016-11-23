import React, { Component, PropTypes } from 'react';

import { Card, CardHeader } from 'material-ui/Card';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';

import Pair from './Pair';

/**
 * Отображение одного дня занятий
 */
export default class Day extends Component {
  render() {
    const { lessons, formattedDate } = this.props;
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
          subtitle={formattedDate}
        />
        {
          pairs &&
          [
            <Divider key='divider' />,
            <List key='list'>
              { Object.keys(pairs).map(number =>
                <Pair key={number} lessons={pairs[number]} number={Number(number)}/>
              ) }
            </List>
          ]
        }
      </Card>
    );
  }
}

Day.propTypes = {
  date: PropTypes.object,
  formattedDate: PropTypes.string,
  lessons: PropTypes.array
};
