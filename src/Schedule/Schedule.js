import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import './schedule.css';

import Day from './Day';

class Schedule extends Component {

  render() {
    const { lessons } = this.props;
    if(!lessons) {
      return <h1>Расписание загружается</h1>;
    }
    const startOfWeek = moment().startOf('isoWeek');
    const endOfWeek = moment().endOf('isoWeek');
    const l = lessons
      .filter((lesson, index) => {
        const lessonDate = moment(lesson.date);
        return lessonDate.isBetween(startOfWeek, endOfWeek, 'day')
      });

    const lessonsByDay = [
      {date: moment().startOf('isoWeek')},
      {date: moment().startOf('isoWeek').add(1, 'days')},
      {date: moment().startOf('isoWeek').add(2, 'days')},
      {date: moment().startOf('isoWeek').add(3, 'days')},
      {date: moment().startOf('isoWeek').add(4, 'days')},
      {date: moment().startOf('isoWeek').add(5, 'days')},
      {date: moment().startOf('isoWeek').add(6, 'days')}
    ].map(day => {
      console.log(day.date.format());
      day.lessons = l.filter(lesson => moment(lesson.date).isSame(day.date, 'day'))
      return day;
    });

    return (
      <div>
        {lessonsByDay.map(day => <Day {...day} />)}
      </div>
    );
  }
}

Schedule.propTypes = {
  lessons: PropTypes.array
}

export default connect()(Schedule);
