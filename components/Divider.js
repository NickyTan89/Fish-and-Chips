import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class Divider extends Component {
  render() {
    const { color, style, ...props } = this.props;
    const dividerStyles = [
      styles.divider,
      style,
    ];

    return (
      <View
        color="#9DA3B4"
        style={dividerStyles}
        {...props}
      />
    )
  }
}

export const styles = StyleSheet.create({
  divider: {
    height: 0,
    margin: 32,
    borderBottomColor: "#C5CCD6",
    borderBottomWidth: StyleSheet.hairlineWidth,
  }
})