import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const CustomBtn = ({text, click, isButtonAble}) => {
  return (
    <>
      <TouchableOpacity
        disabled={!isButtonAble}
        style={styles.Btn}
        onPress={click}>
        <Text style={styles.textStyle}>{text}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  Btn: {
    borderRadius: 10,
    width: '90%',
    height: 60,
    backgroundColor: '#02C38E',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  textStyle: {
    color: '#ffff',
    fontSize: 19,
  },
});

export default CustomBtn;
