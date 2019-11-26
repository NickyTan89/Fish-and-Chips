import React, { Component } from 'react';
import { View, Text, ImageBackground, StatusBar, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import background from '../../assets/Backgrounds/backgroundBG.png';
import styles from '../../Styles';


class Pod2 extends Component {
    static navigationOptions = {
        header: null
    }
    
    constructor(props) {
        super(props); 
        this.state = {
        lightsValue: false,
        pumpValue: false,
        };
        this.toggleLightsON = this.toggleLightsON.bind(this);
        this.toggleLightsOFF = this.toggleLightsOFF.bind(this);
        this.togglePumpON = this.togglePumpON.bind(this);
        this.togglePumpOFF = this.togglePumpOFF.bind(this);
    }

    toggleLightsON() {
        if (this.state.lightsValue == false) {
            Alert.alert('Status','Lights are switched ON.')
            this.setState({
                lightsValue: true
            });
        }      
    }

    toggleLightsOFF() {
        if (this.state.lightsValue == true) {
            Alert.alert('Status','Lights are switched OFF.')
            this.setState({
                lightsValue: false
            });
        }
    }
    
    togglePumpON() {
        if (this.state.pumpValue == false) {
            Alert.alert('Status', 'Pump is operating.')
            this.setState({
                pumpValue: true
            });
        }
    }

    togglePumpOFF() {
        if (this.state.pumpValue == true) {
            Alert.alert('Status', 'Pump is switched OFF.')
            this.setState({
                pumpValue: false
            });
        }
    }
    

    render() {
        const { containerFlex, boxSmall, smallText, mediumTextS, mediumTextY, mediumTextB,
                lightsBTN, testRunBTN, timeBTN1, timeBTN2 } = styles
        return (
            <ImageBackground
                source={background}
                style={{width: '100%', height: '100%'}}
            >
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="#ecf0f1"
                />
                <View style={containerFlex}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={boxSmall}>
                            <Text style={smallText}>Water Temp</Text>
                            <Text style={mediumTextS}>-</Text>
                        </View>
                        <View style={boxSmall}>
                            <Text style={smallText}>pH level</Text>
                            <Text style={mediumTextS}>-</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                    <View style={boxSmall}>
                            <Text style={smallText}>Pump status</Text>
                            <Text style={mediumTextB}>{this.state.pumpValue ? 'ON' : 'OFF'}</Text>
                        </View>
                        <View style={boxSmall}>
                            <Text style={smallText}>Lights</Text>
                            <Text style={mediumTextY}>{this.state.lightsValue ? 'ON' : 'OFF'}</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity
                            style={timeBTN1}
                            onPress={null}
                            >
                            <Text>Run 15 mins</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={timeBTN2}
                            onPress={null}
                            >
                            <Text>Run 30 mins</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity
                            style={timeBTN1}
                            onPress={null}
                            >
                            <Text>Run 45 mins</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={timeBTN2}
                            onPress={null}
                            >
                            <Text>Run 1 hour</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View>
                            <TouchableOpacity
                                style={testRunBTN}
                                onPress={this.togglePumpON}
                                >
                                <Icon name="water" size={35} color="#0095ff" />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={testRunBTN}
                                onPress={this.togglePumpOFF}
                                >
                                <Icon name="water-off" size={35} color="#878787" />
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection: 'column'}}>
                            <TouchableOpacity
                                style={lightsBTN}
                                onPress={this.toggleLightsON}
                                >
                                <Icon name="lightbulb-on-outline" size={35} color="#eeb017" />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={lightsBTN}
                                onPress={this.toggleLightsOFF}
                                >
                                <Icon name="lightbulb" size={35} color="#878787" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        )
    }
}

export default Pod2;
