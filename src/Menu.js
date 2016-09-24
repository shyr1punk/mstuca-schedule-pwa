import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';

import { fetchMenu } from './actions';

class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      facultyId: null,
      specialityId: null,
      groupId: null
    };
  }

  componentWillMount() {
    if(!this.props.menuData.faculty) {
      fetchMenu(this.props.dispatch);
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
    const menuData = this.props.menuData;
    return (
      <div>
        <Card>
          <DatePicker />
        </Card>
        <Card>
          <CardActions>
            {
              menuData.faculties.map(faculty =>
                <RaisedButton
                  label={faculty.short}
                  onClick={() => {this.onFacultyClick(faculty._id)}} secondary
                  style={{marginBottom: '12px'}}/>
              )
            }
          </CardActions>
        </Card>
        <Card>
          <CardActions>
            {
              menuData.specialities
                .filter(speciality =>
                  this.state.facultyId ? speciality.faculty === this.state.facultyId : true
                ).map(speciality =>
                  <RaisedButton
                  label={speciality.short}
                  onClick={() => {this.onSpecialityClick(speciality._id, speciality.faculty)}} primary
                  style={{marginBottom: '12px'}}/>
                )
            }
          </CardActions>
        </Card>
        <Card>
          <CardActions>
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
                  label={group.short}
                  onClick={() => {this.onGroupClick(group._id, group.speciality)}}
                  style={{marginBottom: '12px'}}/>
                )
            }
          </CardActions>
        </Card>
      </div>
    );
  }
}

Menu.contextTypes = {
  menuData: PropTypes.object,
  history: PropTypes.object
};

export default connect(state => ({
  menuData: state.menu
}))(Menu);
