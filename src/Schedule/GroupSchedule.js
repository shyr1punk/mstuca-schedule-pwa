import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Schedule from './Schedule';
import { fetchGroupSchedule } from './scheduleActions';

class GroupSchedule extends Component {

  componentWillMount() {
    if(!this.props.schedules[this.props.params.groupId]) {
      fetchGroupSchedule(this.props.dispatch, this.props.params.groupId);
    }
  }

  render() {
    const schedule = this.props.schedules[this.props.params.groupId];
    return (
      <Schedule lessons={schedule} />
    )
  }
}

GroupSchedule.propTypes = {
  dispatch: PropTypes.func,
  params: PropTypes.object,
  schedule: PropTypes.object
};

export default connect(state => ({
  schedules: state.scheduleReduser.schedules
}))(GroupSchedule);
