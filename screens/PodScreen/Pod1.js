import React, { Component } from 'react';
import { View, Text, ImageBackground, StatusBar, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import background from '../../assets/Backgrounds/backgroundBG.png';
import styles from '../../Styles';


class Pod1 extends Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props); 
        this.state = {
        lightsValue: false,
        pumpValue: false,
        tempValue: [],
        };
        this.toggleLightsON = this.toggleLightsON.bind(this);
        this.toggleLightsOFF = this.toggleLightsOFF.bind(this);
        this.togglePumpOFF = this.togglePumpOFF.bind(this);
    }

    // Get request from RasberryPi to get the temperature reading.
    // 1 sec time inverval refreshes the data shown.
    // Have yet to add in if error then show 'offline'
    // fetchTemp() { 
    //     setInterval(()=> {
    //     fetch('http://192.168.1.125:5000/temperature') 
    //         .then(response => response.json())
    //         .then(data => this.setState({ tempValue: data.toFixed(0) })
    //         )
    //         .catch((error) => {
    //             console.error(error);
    //         });
    //     },1000) // one sec interval for checking the temperature data.
    // } 

    // componentDidMount() {
    //     this.fetchTemp();
    // }

    // lights toggle to be added once the lights system is done.
    toggleLightsON = async () => {
        fetch('http://192.168.1.125:5000/light', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({command:"ON"})
        }) 
    }

    toggleLightsOFF = async () => {
        fetch('http://192.168.1.125:5000/light', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({command:"OFF"})
        })
    }

    // to switch the pump on, a code is set on the rasberryPie for a 15sec duration test run.
    togglePumpON = async () => {
        fetch('http://192.168.1.125:5000/pump', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({command:"ON"}),
        })
    }

    // kill command to stop the pump(RPi is coded to stop pump of all schedule & running statuses)
    togglePumpOFF = async () => {
        fetch('http://192.168.1.125:5000/pump', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({command:"OFF"}),
        })
    }

    // Pump running shedule is python coded on RPi.
    // Here we just send X numbers by post request to the RPi
    // and it will set the pump to run in X minutes.
    togglePump15 = async () => {
        fetch('http://192.168.1.125:5000/pump_schedule', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(1), // set to 1 Min here to avoid overflow when doing demo.
        })
    }

    togglePump30 = async () => {
        fetch('http://192.168.1.125:5000/pump_schedule', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(30), // 30 for 30mins of water pump run time
        })
    }

    togglePump45 = async () => {
        fetch('http://192.168.1.125:5000/pump_schedule', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(45),
        })
    }

    togglePump60 = async () => {
        fetch('http://192.168.1.125:5000/pump_schedule', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(60),
        })
    }

    componentWillUnmount() {
        this.fetchTemp();
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
                            <Text style={mediumTextS}>{this.state.tempValue}ºC</Text>
                        </View>
                        <View style={boxSmall}>
                            <Text style={smallText}>pH level</Text>
                            <Text style={mediumTextS}>-</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View style={boxSmall}>
                            <Text style={smallText}>Pump status</Text>
                            <Text style={mediumTextB}>{this.state.lightsValue ? 'ON' : 'OFF'}</Text>
                        </View>
                        <View style={boxSmall}>
                            <Text style={smallText}>Lights</Text>
                            <Text style={mediumTextY}>{this.state.lightsValue ? 'ON' : 'OFF'}</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity
                            style={timeBTN1}
                            onPress={this.togglePump15}
                            >
                            <Text>Run 15 mins</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={timeBTN2}
                            onPress={this.togglePump30}
                            >
                            <Text>Run 30 mins</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity
                            style={timeBTN1}
                            onPress={this.togglePump45}
                            >
                            <Text>Run 45 mins</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={timeBTN2}
                            onPress={this.togglePump60}
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

export default Pod1;
