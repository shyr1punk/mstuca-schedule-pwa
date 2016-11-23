import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import './schedule.css';

import Day from './Day';

const generateNewDate = function(addDays) {
  if (typeof addDays !== 'number' || addDays === 0) {
    return moment().startOf('isoWeek');
  }
  return moment().startOf('isoWeek').add(addDays, 'days');
}

class Schedule extends Component {

  render() {
    const { lessons } = this.props;
    if(!lessons) {
      // TODO: анимация загрузки
      return <h1>Расписание загружается</h1>;
    }
    const startOfWeek = moment().startOf('isoWeek');
    const endOfWeek = moment().endOf('isoWeek');
    const l = lessons
      .filter((lesson, index) => {
        const lessonDate = moment(lesson.date);
        return lessonDate.isBetween(startOfWeek, endOfWeek, 'day')
      });

    const lessonsByDay = [0, 1, 2, 3, 4, 5, 6].map(dayNumber => {
      const day = {};
      day.date = generateNewDate(dayNumber);
      day.formattedDate = day.date.format('DD.MM.YYYY');
      day.lessons = l.filter(lesson => moment(lesson.date).isSame(day.date, 'day'))
      return day;
    });

    return (
      <div>
        {lessonsByDay.map(day => <Day key={day.formattedDate} {...day} />)}
      </div>
    );
  }
}

Schedule.propTypes = {
  lessons: PropTypes.array
}

export default connect()(Schedule);
