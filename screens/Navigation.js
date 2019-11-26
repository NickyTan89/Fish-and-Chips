import React, { Component } from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/Entypo';
import Pod1 from './PodScreen/Pod1';
import Pod2 from './PodScreen/Pod2';
import Logs from './Logs';
import Setting from './Settings';
import Home from './Home';


// creating the Tab Navigator for Home,Logs..etc pages
// can be placed on top or bottom in this case.
// Drawer navigator can also be used.
const tabOptions ={
    Pod1: {
        screen: Pod1,
        navigationOptions:{
            tabBarLabel:'Pod 1',
            tabBarIcon:({tintColor})=>(
                <Icon name="leaf" color={tintColor} size={25} />
            )
        }
    },
    Pod2: {
        screen: Pod2,
        navigationOptions: {
            tabBarLabel:'Pod 2',
            tabBarIcon:({tintColor})=>(
                <Icon name="leaf" color={tintColor} size={25} />
            )
        }
    },
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon:({tintColor})=>(
                <Icon name="home" color={tintColor} size={25} /> 
            )
        }
    },
    Logs: {
        screen: Logs,
        navigationOptions: {
            tabBarLabel: 'Logs',
            tabBarIcon:({tintColor})=>(
                <Icon3 name="line-graph" color={tintColor} size={25} />
            )
        }
    },
    Settings: {
        screen: Setting,
        navigationOptions: {
            tabBarLabel: 'Settings',
            tabBarIcon:({tintColor})=>(
                <Icon2 name="md-settings" color={tintColor} size={25} />
            )
        }
    }
};

const DashTabNavigator = createBottomTabNavigator(tabOptions, {
    initialRouteName: 'Home',
    tabBarOptions: {
        activeTintColor: '#5ef288',
        inactiveTintColor: '#56b973',
        style: {
            backgroundColor: '#275333',
            paddingBottom: 5,
            height: 60,
        }
    }
})

const AppContainer = createAppContainer(DashTabNavigator);

export default function App() {
    return (
      <AppContainer />
    );
  }