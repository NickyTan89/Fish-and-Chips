import React, { Component } from 'react';
import { View, Text, ImageBackground, StatusBar, Image, ScrollView } from 'react-native';
import background from '../assets/Backgrounds/backgroundBG.png';
import Pod1Temp from './PodScreen/Graphchart/Pod1Temp';
import Pod1PH from './PodScreen/Graphchart/Pod1PH';
import Pod2Temp from './PodScreen/Graphchart/Pod2Temp';
import Pod2PH from './PodScreen/Graphchart/Pod2PH';
import styles from '../Styles';


class Logs extends Component {

    componentDidMount() {
        this._navListener = this.props.navigation.addListener('didFocus', () => {
          StatusBar.setBarStyle('light-content')
        });
      }
    
      componentWillUnmount() {
        this._navListener.remove();
      }

    static navigationOptions = {
        header: null
    }

    render() {
        const { containerFlex, mediumText, podLog, smallTextS } = styles
        return (
            <ImageBackground
                source={background}
                style={{width: '100%', height: '100%'}}
            >
                <View style={containerFlex}>
                    <View style={podLog}>
                        <Text style={mediumText}>Pod Logs</Text>
                    </View>
                    <Text style={smallTextS}>Pod 1 status Logs</Text>
                    <ScrollView scrollEventThrottle={10}>
                        <View style={{flex: 1, background: 'white', paddingLeft: 12, paddingRight: 12}}>
                            <View style={{ height: 240 }}>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                                    <Pod1Temp/>
                                    <Pod1PH/>
                                </ScrollView>
                            </View>
                        </View>
                    </ScrollView>
                    <Text style={smallTextS}>Pod 2 status Logs</Text>
                    <ScrollView scrollEventThrottle={10}>
                        <View style={{flex: 1, background: 'white', paddingLeft: 12, paddingRight: 12}}>
                            <View style={{ height: 240 }}>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                                    <Pod2Temp/>
                                    <Pod2PH/>
                                </ScrollView>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </ImageBackground>
        );
    }
}

export default Logs;
