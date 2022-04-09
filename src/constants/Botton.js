import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Styles from '../styles';
import Colors from '../constants/color';
export function SignInButton() {
  return (
    <View style={styles.btnContainer}>
      <Text style={styles.btnText}>Sign In</Text>
    </View>
  );
}

export function SignUpButton() {
  return (
    <View style={styles.btnContainer}>
      <Text style={styles.btnText}>Sign Up</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    borderRadius: 25,
    height: 40,
  },
  btnText: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
