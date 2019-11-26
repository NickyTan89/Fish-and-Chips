import React, { Component } from 'react';
import { View, Image, KeyboardAvoidingView, Text, ImageBackground, StatusBar, TouchableOpacity } from 'react-native';
import imageLogo from '../assets/Images/Aquaponic.png';
import background from '../assets/Backgrounds/backgroundBG.png';
import styles from '../Styles';

 
class Logout extends Component {

  componentDidMount() {
    this._navListener = this.props.navigation.addListener('didFocus', () => {
      StatusBar.setBarStyle('light-content')
    });
  } // for changing the status bar oh the phone to Light or Dark icons
  // used only when TabNavigatior is used.

  componentWillUnmount() {
    this._navListener.remove();
  }

  static navigationOptions = {
    header: null
  }

  render() {
    const { logoutBtn, notyetBtn, keyview, container, logo, greyText } = styles
    return (
      <ImageBackground
        source={background}
        style={{height: '100%', width: '100%'}}
      >
        <KeyboardAvoidingView style={keyview}>
          <Image
            source={imageLogo}
            style={logo}
          />
          <View style={container}>
            <Text style={greyText}>
              Leaving so soon?
            </Text>
            <TouchableOpacity         // reason to use TouchableOpacity is because Native buttons
              style={logoutBtn}       // doesn't support styles. So create one with T.O.
              onPress={() => this.props.navigation.navigate('Welcome')} // navigate back to Welcome/Login page
            >
              <Text>Log Out</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={notyetBtn}
              onPress={() => this.props.navigation.navigate('Home')} // navigate back to HomePage
            >
              <Text>Not Yet</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

export default Logout;
