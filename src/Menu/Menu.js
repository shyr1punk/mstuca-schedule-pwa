import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { Tabs, Tab } from 'material-ui/Tabs';

import { fetchMenu } from '../actions';
import TeachersTab from './TeachersTab';
import GroupsTab from './GroupsTab';

import { MENU_FETCHING, MENU_OK, MENU_ERROR } from '../reducers';

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
    const { menuStatus } = this.props;

    if(menuStatus === MENU_FETCHING) {
      return <h1>Меню загружается</h1>;
    }
    if(menuStatus === MENU_OK) {
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
    if(menuStatus === MENU_ERROR) {
      return <h1>Ошибка загрузки меню</h1>;
    }
  }
}

Menu.propTypes = {
  menuData: PropTypes.object,
  menuStatus: PropTypes.string
}

export default connect(state => ({
  menuData: state.menuReducer.menu,
  menuStatus: state.menuReducer.status
}))(Menu);
