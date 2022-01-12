import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import IconMi from 'react-native-vector-icons/MaterialIcons';

const BackBtn = ({onclick}) => {
  return (
    <>
      <TouchableOpacity style={styles.btn} onPress={onclick}>
        <IconMi name="arrow-back-ios" size={30} style={styles.icon} />
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  btn: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  icon: {
    color: 'white',
  },
});
export default BackBtn;
