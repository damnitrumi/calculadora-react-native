import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type DisplayProps = {
  displayValue: string;
};

export default class Display extends React.Component<DisplayProps> {
  render(): React.ReactNode {
    return (
      <View style={style.displayContainer}>
        <Text style={style.displayValue}>{this.props.displayValue}</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  displayContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  displayValue: {
    fontSize: 60,
    color: '#fff',
  },
});
