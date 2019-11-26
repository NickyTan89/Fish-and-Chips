import React, { Component } from 'react'
import { ImageBackground, StyleSheet, Image, ScrollView, TouchableOpacity, Text, View, Switch } from 'react-native'
import background from '../assets/Backgrounds/backgroundBG.png';
import logo from '../assets/Images/aqua.png';


// dummy settings page, not fully functional yet.
class TestSet extends Component {
  static navigationOptions = {
    header: null
  }
  constructor(props) {
    super(props); 
    this.state = {
      notifications: false,
      messages: false,
      waterTemp: false,
      waterLevel: false,
      phLevel: false,
    };
  }

  render() {
    return (
      <ImageBackground
        source={background}
        style={{width: '100%', height: '100%'}}
      >
        <ScrollView
          horizontal={false}
        >
        {/* header block */}
          <View style={styles.divider} />
          <View style={styles.boxHeader}>
            <View style={styles.header}>
              <Text style={styles.headerText}>Settings</Text>
            </View>
            <Image source={logo} style={styles.logo}/>
          </View>

        {/* profile block */}
          <View style={styles.divider2} />
        {/* User name block */}
          <View style={styles.view}>
            <View style={styles.box}>
              <View style={styles.block2}>
                <Text style={styles.blackText}>
                    Username:{"\n"}
                    Ponic Worker One
                </Text>
              </View>
            </View>
            <TouchableOpacity style={styles.edit}>
                <Text>Edit</Text>
            </TouchableOpacity>
          </View>
        {/* Location block */}
        <View style={styles.view}>
            <View style={styles.box}>
              <View style={styles.block2}>
                <Text style={styles.blackText}>
                    Location:{"\n"}
                    Hulu Langat, Selangor
                </Text>
              </View>
            </View>
            <TouchableOpacity style={styles.edit}>
                <Text>Edit</Text>
            </TouchableOpacity>
          </View>
        {/* Email block */}
        <View style={styles.view}>
            <View style={styles.box}>
              <View style={styles.block2}>
                <Text style={styles.blackText}>
                    Email:{"\n"}
                    worker_one@ponic.com
                </Text>
              </View>
            </View>
            <TouchableOpacity style={styles.edit}>
                <Text>Edit</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.divider}></View>

        {/* notifications and alerts block */}
          <View style={styles.box}>
            <View style={styles.block}>
              <Text>Notifications</Text>
            </View>
            <Switch
              value={this.state.notifications}
              onValueChange={value => this.setState({ notifications: value })}
            ></Switch>
          </View>
          <View style={styles.box}>
            <View style={styles.block}>
              <Text>Message Alerts</Text>
            </View>
            <Switch
              value={this.state.messages}
              onValueChange={value => this.setState({ messages: value })}
            ></Switch>
          </View>
          <View style={styles.box}>
            <View style={styles.block}>
              <Text>Water Temp Alert</Text>
            </View>
            <Switch
              value={this.state.waterTemp}
              onValueChange={value => this.setState({ waterTemp: value })}
            ></Switch>
          </View>
          <View style={styles.box}>
            <View style={styles.block}>
              <Text>Water Level Alert</Text>
            </View>
            <Switch
              value={this.state.waterLevel}
              onValueChange={value => this.setState({ waterLevel: value })}
            ></Switch>
          </View>
          <View style={styles.box}>
            <View style={styles.block}>
              <Text>pH Level Alert</Text>
            </View>
            <Switch
              value={this.state.phLevel}
              onValueChange={value => this.setState({ phLevel: value })}
            ></Switch>
          </View>
        </ScrollView>
      </ImageBackground>
    )
  }
}

export default TestSet;

const styles = StyleSheet.create({
  view: {
    height: 80,
    marginBottom: 10,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  box: { // container
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
    justifyContent: 'space-between',
    backgroundColor: 'transparent'
  },
  block: {
    flex: 1,
    alignItems: 'flex-start',
    padding: 10,
    margin: 10,
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    height: 40,
    borderRadius: 40,
    borderEndColor: '#6ded92',
    borderStartColor: '#52b36e',
    borderStartWidth: 5,
    borderEndWidth: 5,
  },
  block2: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 15,
    margin: 10,
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    height: 70,
    width: 250,
    borderRadius: 40,
    borderEndColor: '#6ded92',
    borderStartColor: '#60ce80',
    borderStartWidth: 5,
    borderEndWidth: 5,
  },
  boxHeader: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
    flexDirection: 'row',
    height: 40,
  },
  header: {
    backgroundColor: '#91ffb0',
    height: 50,
    width: 200,
    paddingTop: 0,
    padding: 20,
    borderTopStartRadius: 40,
    borderBottomEndRadius: 40,
    borderStartColor: '#52b36e',
    borderEndColor: '#52b36e',
    borderStartWidth: 5,
    borderEndWidth: 5,
  },
  headerText: {
    fontSize: 35,
    color: 'black',
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#397b4c',
  },
  divider: {
    color: "#9DA3B4",
    height: 0,
    margin: 20,
    marginTop: 30,
    marginBottom: 10,
    borderBottomColor: "#C5CCD6",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  divider2: {
    color: "#9DA3B4",
    height: 0,
    marginTop: 10,
    margin: 20,
    borderBottomColor: "#C5CCD6",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  edit: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#baffce',
    height: 40,
    width: 70,
    marginRight: 10,
    borderTopStartRadius: 25,
    borderBottomEndRadius: 25,
    borderStartColor: '#6ded92',
    borderEndColor: '#6ded92',
    borderStartWidth: 5,
    borderEndWidth: 5,
  },
  greyText: {
    color: '#f0f0f0',
    fontSize: 15,
  },
  blackText: {
    fontSize: 16,
  }
})
