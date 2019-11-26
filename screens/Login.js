import React, { Component } from 'react';
import { Image, View, TouchableOpacity, TextInput, Keyboard, StyleSheet,
         KeyboardAvoidingView, ImageBackground, Text, StatusBar } from 'react-native';
import imageLogo from '../assets/Images/Aquaponic.png';
import background from '../assets/Backgrounds/backgroundBG.png';

// the const username/email and password for easier access app (temporary)
const Valid_Email = "worker_one@ponics.com";
const Valid_Pass = "PonicsOverseer"

export default class Login extends Component {
  state = {
    email: Valid_Email,
    password: Valid_Pass,
    errors: [],
    loading: false,
    } // setting dummy auth for login

    static navigationOptions = {
      header: null
    }

    checkLogin() {
      const { navigation } = this.props;
      const { email, password } = this.state;
      const errors = [];

      Keyboard.dismiss();
      this.setState({ loading: true });

      if ( email !== Valid_Email ) {
        errors.push('email');
      }
      if ( password !== Valid_Pass ) {
        errors.push('password');
      }

      this.setState({ errors, loading: false });

      if (!errors.length) {
        navigation.navigate('Home');
      }
    }

  render() {
    const { navigation } = this.props;
    const { loading, errors } = this.state;
    const hasErrors = key => errors.includes(key) ? styles.hasErrors : null;
    return (
      <ImageBackground
        source={background}
        style={{width: '100%', height: '100%'}}
      >
        <StatusBar
          barStyle="light-content"
          backgroundColor="#ecf0f1"
        />
        <KeyboardAvoidingView // for the keyboard to not cover up the input field
            style={styles.keyview}
            behavior="padding"
          >
            <Image
              source={imageLogo}
              style={styles.logo}
            />
            <View style={styles.container}>
              <View style={styles.inputBox}>
                <TextInput 
                  style={[styles.input, hasErrors('email')]}
                  error={hasErrors('email')}
                  defaultValue={this.state.email}
                  autoCorrect={false}
                  keyboardType='email-address'
                  onChangeText={text => this.setState({ email: text})}
                />
              </View>
              <View style={styles.inputBox}>
                <TextInput
                  style={[styles.input, hasErrors('password')]}
                  error={hasErrors('password')}
                  defaultValue={this.state.password}
                  secureTextEntry={true}
                  returnKeyType="done"
                  onChangeText={text => this.setState({ password: text})}
                />
              </View>
              <TouchableOpacity 
                style={styles.loginBTN}
                onPress={() => this.checkLogin()} // checks username and password after clicking
              >
                {loading ?
                    <ActivityIndicator size="small" color="white" />:
                    <Text>Login</Text>
                }
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.forgetPass}
                onPress={() => navigation.navigate('Forget')}>
                  <Text style={{ textDecorationLine: 'underline' }}>
                      Forgot your password?
                  </Text>
              </TouchableOpacity>
                {/* style={loginBTN} */}
                {/* <Text>Forgotten your password?</Text> */}
            </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  input: { // Login/Welcome page input field styles
    fontSize: 17,
    width: 240,
    height: 40,
    position: 'absolute',
    right: 40,
  },
  inputBox: {
    height: 50,
    width: 310,
    marginTop: 5,
    backgroundColor: '#54bcff',
    borderColor: '#4795c9',
    borderWidth: 5,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderTopLeftRadius: 40,
    borderBottomRightRadius: 40,
    shadowColor: '#00ace6',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyview: { // keyboard avoiding view styles
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  loginBTN: { // Not Yet button style
    backgroundColor: '#60ce80',
    borderWidth: 2,
    borderColor: '#4ca466',
    borderRadius: 40,
    shadowColor: '#00ace6',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 10,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 20,
    padding: 10,
    width: 200,
    alignItems: 'center',
  },
  container: { // container "without"
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  logo: { // logo styles for header image
    flex: 1,
    resizeMode: 'contain',
    width: "100%",
  },
  hasErrors: {
    borderBottomColor: 'red',
  },
  forgetPass: {
    marginTop: 30,
  }
})
