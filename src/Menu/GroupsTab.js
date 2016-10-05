import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardText } from 'material-ui/Card';
import { Tab } from 'material-ui/Tabs';
import Divider from 'material-ui/Divider';

class GroupsTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      facultyId: null,
      specialityId: null,
      groupId: null
    }
  }

  onFacultyClick(facultyId) {
    if (this.state.facultyId === facultyId) {
      return;
    }
    this.setState({
      facultyId,
      specialityId: null,
      groupId: null
    });
  }

  onSpecialityClick(specialityId, facultyId) {
    if(this.state.specialityId === specialityId) {
      return;
    }
    this.setState({
      facultyId,
      specialityId,
      groupId: null
    });
  }

  onGroupClick(groupId) {
    this.context.history.push(`/schedule/${groupId}`);
  }

  render() {
    const { menuData } = this.props;

    return (
      <Card>
        <CardText>
          {
            menuData.faculties.map(faculty =>
              <RaisedButton
                key={faculty._id}
                label={faculty.short}
                onClick={() => {this.onFacultyClick(faculty._id)}} secondary
                style={{marginBottom: '12px'}}/>
            )
          }
        <Divider />
          {
            menuData.specialities
              .filter(speciality =>
                this.state.facultyId ? speciality.faculty === this.state.facultyId : true
              ).map(speciality =>
                <RaisedButton
                key={speciality._id}
                label={speciality.short}
                onClick={() => {this.onSpecialityClick(speciality._id, speciality.faculty)}} primary
                style={{marginBottom: '12px'}}/>
              )
          }
        <Divider />
          {
            menuData.groups
              .filter(group => {
                if (this.state.specialityId) {
                  return group.speciality === this.state.specialityId;
                } else if (this.state.facultyId) {
                  return group.faculty === this.state.facultyId;
                }
                return true;
              }).map(group =>
                <RaisedButton
                key={group._id}
                label={group.short}
                onClick={() => {this.onGroupClick(group._id, group.speciality)}}
                style={{marginBottom: '12px'}}/>
              )
          }
        </CardText>
      </Card>
    );
  }
}

GroupsTab.propTypes = {
  menuData: PropTypes.object
}

GroupsTab.contextTypes = {
  history: PropTypes.object
};

export default connect(state => ({
  menuData: state.menuReducer.menu
}))(GroupsTab);
