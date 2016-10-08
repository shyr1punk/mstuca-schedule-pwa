import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardText } from 'material-ui/Card';

import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';

class TeachersTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teacherFilter: ''
    };

    this.hangleTeacherInputChange = this.hangleTeacherInputChange.bind(this);
    this.handleTeacherClick = this.handleTeacherClick.bind(this);
  }

  hangleTeacherInputChange(event, value) {
    event.stopPropagation();
    this.setState({
      teacherFilter: value
    })
  }

  handleTeacherClick(teacherName) {
    this.context.history.push(`/teachers/${teacherName}/schedule`);
  }

  render () {
    const filterRegexp = new RegExp(this.state.teacherFilter, 'i');
    const teachers = this.state.teacherFilter ?
      this.props.menuData.teachers.filter(teacher => filterRegexp.test(teacher)) :
      this.props.menuData.teachers;
    return (
      <Card>
        <CardText>
          <TextField
            style={{width: '90%', marginLeft: '5%'}}
            hintText='Фильтр по фамилии'
            value={this.state.teacherFilter}
            onChange={this.hangleTeacherInputChange}
          />
          <Divider />
          {teachers.map((teacherName, index) =>
              <RaisedButton
                key={index}
                label={teacherName}
                onClick={() => this.handleTeacherClick(teacherName)}
                fullWidth>
              </RaisedButton>
          )}
        </CardText>
      </Card>
    );
  }
}

TeachersTab.propTypes = {
  menuData: PropTypes.object
}

TeachersTab.contextTypes = {
  history: PropTypes.object
};

export default connect(state => ({
  menuData: state.menuReducer.menu
}))(TeachersTab);
