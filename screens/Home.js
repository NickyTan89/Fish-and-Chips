import React, { Component } from 'react';
import { View, Text, ImageBackground, StatusBar, Image, KeyboardAvoidingView, Switch } from 'react-native';
import background from '../assets/Backgrounds/backgroundBG.png';
import Aquaponic from '../assets/Images/Aquaponic.png';
import styles from '../Styles';



class Home extends Component {
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
    const { keyview, logo, container } = styles
    return (
      <ImageBackground
          source={background}
          style={{width: '100%', height: '100%'}}
      >
        <StatusBar
          barStyle="light-content"
          backgroundColor="#ecf0f1"
          />
        <KeyboardAvoidingView style={keyview}>
          <Image 
              source={Aquaponic}
              style={logo}
          />
          <View style={container}>
            <Text style={{fontSize: 20, color: '#e6e6e6'}} >Welcome User.</Text>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

export default Home;