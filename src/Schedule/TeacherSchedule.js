import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Schedule from './Schedule';
import { fetchTeacherSchedule } from './scheduleActions';

class TeacherSchedule extends Component {

  componentWillMount() {
    if(!this.props.schedules[this.props.params.teacherName]) {
      fetchTeacherSchedule(this.props.dispatch, this.props.params.teacherName);
    }
  }

  render() {
    const schedule = this.props.schedules[this.props.params.teacherName];
    return (
      <Schedule lessons={schedule} />
    )
  }
}

TeacherSchedule.propTypes = {
  dispatch: PropTypes.func,
  params: PropTypes.object,
  schedule: PropTypes.object
};

export default connect(state => ({
  schedules: state.scheduleReduser.schedules
}))(TeacherSchedule);
