import React, { Component } from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import DashTabNavigator from './screens/Navigation';
import Login from './screens/Login';
import ForgetPass from './screens/Forget';


export default function App() {
  return (
    <AppContainer />
  );
}

// App navigation function, to switch views between pages ie. Welcome/Login & Home/Dash page
const AppSwitchNavigator = createSwitchNavigator({
  Login: { screen: Login },
  Home: { screen: DashTabNavigator },
  Forget: { screen: ForgetPass }
},{
  initialRouteName: 'Login',
});

const AppContainer = createAppContainer(AppSwitchNavigator); // rea creating the App as App Switcher NAvigator
