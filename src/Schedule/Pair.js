import React, { Component, PropTypes } from 'react';

import { ListItem } from 'material-ui/List';

import Lesson from './Lesson';

import './pair.css';

/**
 * Отображение одной пары занятий
 * Может включать один и более различных учебных занятий (Lesson)
 *
 * Несколько занятий бывает в случае занятий в подгруппах
 */
export default class Pair extends Component {
  render() {
    const { number } = this.props;

    return (
      <ListItem disabled>
        <div className='pair__number'>{number}</div>
        <div className='pair__lessons'>
          {this.props.lessons.map(lesson => <Lesson {...lesson} />)}
        </div>
      </ListItem>
    );
  }
}

Pair.propTypes = {
  number: PropTypes.number,
  subject: PropTypes.string,
  auditory: PropTypes.string,
  sub_group: PropTypes.string,
  teacher: PropTypes.string
};
