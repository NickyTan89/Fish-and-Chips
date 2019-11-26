import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Pod1 from './PodScreen/Pod1';
import Pod2 from './PodScreen/Pod2';
import Logs from './Logs';
import Logout from './Logout';
import Home from './Home';

export default function App() {
    return (
      <AppContainer />
    );
  }

// creating the Tab Navigator for Home,Logs..etc pages
// can be placed on top or bottom in this case.
// Drawer navigator can also be used.
const DashTabNavigator = createMaterialBottomTabNavigator({
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
                <Icon name="bar-chart" color={tintColor} size={25} />
            )
        }
    },
    Logout: {
        screen: Logout,
        navigationOptions: {
            tabBarLabel: 'Logout',
            tabBarIcon:({tintColor})=>(
                <Icon name="sign-out" color={tintColor} size={25} />
            )
        }
    }
},{
    initialRouteName: 'Home',
    activeColor: '#f0edf6',
    inactiveColor: '#1c1c1c',
    barStyle: { backgroundColor: '#5e5e5e' },
});

const AppContainer = createAppContainer(DashTabNavigator);



import React, { Component } from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Pod1 from './PodScreen/Pod1';
import Pod2 from './PodScreen/Pod2';
import Logs from './Logs';
import Logout from './Logout';
import Home from './Home';


export default function App() {
    return (
      <AppContainer />
    );
  }

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
                <Icon name="bar-chart" color={tintColor} size={25} />
            )
        }
    },
    Logout: {
        screen: Logout,
        navigationOptions: {
            tabBarLabel: 'Logout',
            tabBarIcon:({tintColor})=>(
                <Icon name="sign-out" color={tintColor} size={25} />
            )
        }
    }
};

const DashTabNavigator = createBottomTabNavigator(tabOptions, {
    initialRouteName: 'Home',
    tabBarOptions: {
        activeTintColor: '#5ef288',
        inactiveTintColor: '#408755',
        style: {
            backgroundColor: '#275333',
            paddingBottom: 5,
            height: 60,
        }
    }
})

const AppContainer = createAppContainer(DashTabNavigator);
