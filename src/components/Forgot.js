import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ForgotPassword = ({text}) => {
  return (
    <>
      <TouchableOpacity style={styles.touchStyle}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  touchStyle: {
    marginVertical: 10,
  },
  text: {
    color: '#20B98D',
    fontSize: 19,
    fontWeight: '900',
  },
});

export default ForgotPassword;
