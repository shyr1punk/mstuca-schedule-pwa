import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { Tabs, Tab } from 'material-ui/Tabs';

import { fetchMenu } from '../actions';
import TeachersTab from './TeachersTab';
import GroupsTab from './GroupsTab';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };

    this.handleTabChange = this.handleTabChange.bind(this);
  }

  componentWillMount() {
    if(!this.props.menuData.faculty) {
      fetchMenu(this.props.dispatch);
    }
  }

  handleTabChange(tabIndex) {
    this.setState({
      activeTab: tabIndex
    });
  }

  render() {
    const menuData = this.props.menuData;
    return (
      <Tabs
        value={this.state.activeTab}
        onChange={this.handleTabChange}
      >
        <Tab label='Группы' value={0}><GroupsTab /></Tab>
        <Tab label='Преподаватели' value={1}><TeachersTab /></Tab>
      </Tabs>
    );
  }
}

Menu.propTypes = {
  menuData: PropTypes.object
}

export default connect(state => ({
  menuData: state.menuReducer.menu
}))(Menu);
