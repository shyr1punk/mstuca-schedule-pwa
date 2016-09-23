import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="Расписание МГТУГА"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
