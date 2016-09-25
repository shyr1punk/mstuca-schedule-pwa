import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import './schedule.css';

import { fetchSchedule } from './actions';

class Schedule extends Component {

  componentWillMount() {
    fetchSchedule(this.props.dispatch, this.props.params.groupId);
  }

  render() {
    const lessons = this.props.schedules[this.props.params.groupId];
    if(!lessons) {
      return <h1>Расписание загружается</h1>;
    }
    return (
      <div>
        {lessons.length}
      </div>
    );
  }
}

Schedule.propTypes = {
  params: PropTypes.object
}

export default connect(state => {
  return {
    schedules: state.scheduleReduser.schedules
  };
})(Schedule);
