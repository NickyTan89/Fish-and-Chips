import React, { Component } from 'react';
import { Alert, ActivityIndicator, Keyboard, KeyboardAvoidingView, StyleSheet, 
         View, Input, Text, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import background from '../assets/Backgrounds/backgroundBG.png';

const Valid_Email = "worker_one@ponic.com";

class ForgetPass extends Component {
  state = {
    email: Valid_Email,
    errors: [],
    loading: false,
  }

  handleForgot() {
    const { navigation } = this.props;
    const { email } = this.state;
    const errors = [];
    
    Keyboard.dismiss();
    this.setState({ loading: true });

    if (email !== Valid_Email) {
      errors.push('email');
    }

    this.setState({ errors, loading: false });

    if (!errors.length) {
      Alert.alert(
        'Password sent!',
        'Please check your email.',
        [
          {
            text: 'OK', onPress: () => {
              navigation.navigate('Login')
            }
          }
        ],
        { cancelable: false }
      )
    } else {
      Alert.alert(
        'Error',
        'Please check your Input email address.',
        [
          { text: 'Try Again', }
        ],
        { cancelable: false }
      )
    }
  }

  render() {
    const { navigation } = this.props;
    const { loading, errors } = this.state;
    const hasErrors = key => errors.includes(key) ? styles.errors : null;
    return (
      <ImageBackground
        source={background}
        style={{width: '100%', height: '100%'}}
      >
        <KeyboardAvoidingView
          behavior="padding"
        >
          {/* header blockstart */}
          <View style={styles.divider} />
          <View style={styles.boxHeader}>
            <View style={styles.header}>
              <Text style={styles.headerText}>Retrieve Password</Text>
            </View>
          </View>
          <View style={styles.divider2} />
          {/* header blockend */}
          
          {/* input blockstart */}
          <View style={styles.inputBlock}>
            <Text style={styles.inputHeader}> Input your login email here. </Text>
            <View style={styles.inputBox}>
              <TextInput 
                lable='Email'
                style={[styles.input]}
                error={hasErrors('email')}
                defaultValue={this.state.email}
                autoCorrect={false}
                keyboardType='email-address'
                onChangeText={text => this.setState({ email: text})}
              />
            </View>
            <TouchableOpacity 
              style={styles.forgetBTN}
              onPress={() => this.handleForgot()}>
              {loading ?
                <ActivityIndicator size="small" color="white" /> :
                <Text style={{textAlign: 'center'}}>Forgot</Text>
              }
            </TouchableOpacity>
            {/* input blockend */}

            {/* back to Login block */}
            <TouchableOpacity 
              style={styles.loginBTN}
              onPress={() => navigation.navigate('Login')}>
              <Text style={{ textAlign: 'center', textDecorationLine: 'underline' }}>
                Back to Login
              </Text>
            </TouchableOpacity>
            {/* back to login blockend */}
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    )
  }
}

export default ForgetPass;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  keyview: { // keyboard avoiding view styles
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  boxHeader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    flexDirection: 'row',
    height: 50,
    width: 300,
  },
  header: {
    backgroundColor: '#deffe4',
    height: 80,
    width: 300,
    marginTop: 6,
    paddingTop: 0,
    padding: 20,
    borderTopStartRadius: 70,
    borderBottomEndRadius: 70,
    borderStartColor: '#52b36e',
    borderEndColor: '#52b36e',
    borderStartWidth: 5,
    borderEndWidth: 5,
  },
  headerText: {
    left: 25,
    fontSize: 30,
    color: 'black',
  },
  inputHeader: {
    fontSize: 20,
    color: '#cccccc'
  },
  input: { // Login/Welcome page input field styles
    fontSize: 17,
    width: 240,
    height: 40,
    position: 'absolute',
  },
  inputBox: {
    height: 50,
    width: 310,
    marginTop: 5,
    marginBottom: 10,
    backgroundColor: '#defffc',
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
  inputBlock: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    height: 40,
    marginBottom: 40,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  divider2: {
    height: 40,
    marginTop: 15,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  hasErrors: {
    borderBottomColor: 'red',
  },
  forgetBTN: {                                    // Logout Button style
    backgroundColor: '#78fa9d',
    borderWidth: 2,
    borderColor: '#56b973',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: '#5ce68a',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 10,
    margin: 10,
    padding: 10,
    width: 200,
  },
  loginBTN: {                                    // Not Yet button style
    backgroundColor: '#54bcff',
    borderWidth: 3,
    borderColor: '#4795c9',
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    shadowColor: '#00ace6',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 10,
    margin: 10,
    padding: 10,
    width: 200,
  },
})