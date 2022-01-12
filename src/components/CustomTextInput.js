import React, {useState} from 'react';
import {TextInput, StyleSheet} from 'react-native';

const CustomInput = ({name, type, secure, value, onchangetext}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <>
      <TextInput
        style={[styles.textInput, isFocused && {borderColor: '#26C393'}]}
        onBlur={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
        placeholder={name}
        keyboardType={type}
        value={value}
        onChangeText={onchangetext}
        secureTextEntry={secure}
        autoCorrect={false}
      />
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 2.5,
    borderColor: 'grey',
    width: '90%',
    height: 60,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    fontSize: 19,
  },
});

export default CustomInput;
