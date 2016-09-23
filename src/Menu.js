import React, { Component, PropTypes } from 'react';

import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';

const menuData = {
  facutlies: [
    {
      id: 1,
      short: 'МФ'
    }, {
      id: 2,
      short: 'ФАСК'
    }, {
      id: 3,
      short: 'ФПМВТ'
    }, {
      id: 4,
      short: 'ФУВТ'
    }
  ],
  specialities: [
    {
      id: 1,
      short: 'М',
      facultyId: 1
    }, {
      id: 2,
      short: 'БТП',
      facultyId: 1
    }, {
      id: 3,
      short: 'УВД',
      facultyId: 2
    }, {
      id: 5,
      short: 'ПМ',
      facultyId: 3
    }, {
      id: 6,
      short: 'ЭВМ',
      facultyId: 3
    }, {
      id: 7,
      short: 'БИ',
      facultyId: 3
    }, {
      id: 8,
      short: 'ОП',
      facultyId: 4
    }
  ],
  groups: [
    {
      id: 1,
      short: 'М 1-1',
      specialityId: 1,
      facultyId: 1
    }, {
      id: 2,
      short: 'М 1-2',
      specialityId: 1,
      facultyId: 1
    }, {
      id: 3,
      short: 'ЭВМ 1-1',
      specialityId: 6,
      facultyId: 3
    }, {
      id: 4,
      short: 'ЭВМ 1-2',
      specialityId: 6,
      facultyId: 3
    }, {
      id: 5,
      short: 'ПМ 1-1',
      specialityId: 5,
      facultyId: 3
    }
  ]
}

class Menu extends Component {

  constructor(props) {
  super(props);
  this.state = {
    facultyId: null,
    specialityId: null,
    groupId: null
  };
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
    return (
      <div>
        <Card>
          <DatePicker />
        </Card>
        <Card>
          <CardActions>
            {
              menuData.facutlies.map(faculty =>
                <RaisedButton
                  label={faculty.short}
                  onClick={() => {this.onFacultyClick(faculty.id)}} secondary
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
                  this.state.facultyId ? speciality.facultyId === this.state.facultyId : true
                ).map(speciality =>
                  <RaisedButton
                  label={speciality.short}
                  onClick={() => {this.onSpecialityClick(speciality.id, speciality.facultyId)}} primary
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
                    return group.specialityId === this.state.specialityId;
                  } else if (this.state.facultyId) {
                    return group.facultyId === this.state.facultyId;
                  }
                  return true;
                }).map(group =>
                  <RaisedButton
                  label={group.short}
                  onClick={() => {this.onGroupClick(group.id, group.specialityId)}}
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
  history: PropTypes.object
};

export default Menu;
