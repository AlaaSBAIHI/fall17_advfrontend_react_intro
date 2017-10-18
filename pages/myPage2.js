import React from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import TabsExampleSimple from '../components/tabs';
import RaisedButtonExampleSimple from "../components/button";


const Main = () => (
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div>
            <AppBar title="My AppBar" />
            <TabsExampleSimple>
                <RaisedButtonExampleSimple />
            </TabsExampleSimple>
        </div>
    </MuiThemeProvider>
);

export default Main;