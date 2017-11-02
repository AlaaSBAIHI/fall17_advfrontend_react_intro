import React from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import TabsSwipeable from "../components/swipTabs";
import Head from "next/head";


const Main = () => (
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
       <div>
        <Head>
            <link rel="stylesheet" href="static/redi.css" />
        </Head>
            <div>
                <AppBar title="ReDI: Advanced Frontend" />
                <TabsSwipeable>
                </TabsSwipeable>
            </div>
            <div>
                <p>
                </p>
            </div>
        </div>
    </MuiThemeProvider>
);

export default Main;