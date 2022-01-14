import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ForgotPassword = ({text, onClickForgotBtn}) => {
  return (
    <View style={styles.forgotContainer}>
      <TouchableOpacity style={styles.touchStyle} onPress={onClickForgotBtn}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  forgotContainer: {
    alignSelf: 'flex-start',
    marginHorizontal: 20,
  },
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
