import React from 'react';
import {Text, TouchableHighlight, StyleSheet, Dimensions} from 'react-native';

type ButtonProps = {
  label: string;
  operation?: boolean;
  double?: boolean;
  triple?: boolean;
  onClick: (v: string) => void;
};

export default class Button extends React.Component<ButtonProps> {
  render(): React.ReactNode {
    const stylesBtn: Array<any> = [style.button];

    if (this.props.operation) {
      stylesBtn.push(style.operationButton);
    }

    if (this.props.double) {
      stylesBtn.push(style.buttonDouble);
    }

    if (this.props.triple) {
      stylesBtn.push(style.buttonTriple);
    }

    return (
      <TouchableHighlight onPress={() => this.props.onClick(this.props.label)}>
        <Text style={stylesBtn}>{this.props.label}</Text>
      </TouchableHighlight>
    );
  }
}

const style = StyleSheet.create({
  button: {
    fontSize: 40,
    width: Dimensions.get('window').width / 4,
    height: Dimensions.get('window').width / 4,
    padding: 20,
    backgroundColor: '#F0F0F0',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#888',
  },
  operationButton: {
    color: '#fff',
    backgroundColor: '#fa8231',
  },
  buttonDouble: {
    width: (Dimensions.get('window').width / 4) * 2,
  },
  buttonTriple: {
    width: (Dimensions.get('window').width / 4) * 3,
  },
});
