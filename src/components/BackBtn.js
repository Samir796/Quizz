import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import IconMi from 'react-native-vector-icons/MaterialIcons';

const BackBtn = ({onClickBackBtn, textHeader}) => {
  return (
    <View style={styles.containerFirst}>
      <View style={styles.backBtnContainer}>
        <TouchableOpacity style={styles.btn} onPress={onClickBackBtn}>
          <IconMi name="arrow-back-ios" size={30} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <Text style={styles.elementStyle}>{textHeader}</Text>
    </View>
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
  containerFirst: {
    flex: 1,
    justifyContent: 'space-between',
  },
  backBtnContainer: {
    alignItems: 'flex-start',
  },
  elementStyle: {
    color: '#fff',
    fontSize: 34,
    fontWeight: 'bold',
    paddingHorizontal: 30,
    paddingBottom: 30,
  },
});
export default BackBtn;
