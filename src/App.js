import React, { Component, PropTypes } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      drawerIsOpen: false
    };
  }

  handleRightIconButtonClick() {
    this.setState({
      drawerIsOpen: true
    });
  }

  handleDrawerMenuClick() {
    this.setState({
      drawerIsOpen: false
    });
    this.context.history.push('/');
  }

  handleDrawerCloseClick() {
    this.setState({
      drawerIsOpen: false
    });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="Расписание МГТУГА"
            showMenuIconButton={false}
            iconElementRight={
              <IconButton onClick={() => {this.handleRightIconButtonClick()}}>
                <NavigationMenu />
              </IconButton>
            }
          />
          {this.props.children}
          <Drawer
            docked={false}
            width={200}
            open={this.state.drawerIsOpen}
            onRequestChange={(open) => this.setState({open})}
            openSecondary
          >
            <AppBar
              title="Меню"
              showMenuIconButton={false}
              iconElementRight={
                <IconButton onClick={() => {this.handleDrawerCloseClick()}}>
                  <NavigationClose />
                </IconButton>
              }/>
            <MenuItem onClick={() => this.handleDrawerMenuClick()}>Выбор группы</MenuItem>
          </Drawer>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.contextTypes = {
  history: PropTypes.object
};

export default App;
