import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Keyboard} from 'react-native';
import BackBtn from '../../components/BackBtn';
import BgImg from '../../components/BgImage';
import CustomBtn from '../../components/CustomButton';
import CustomInput from '../../components/CustomTextInput';

const ForgotScreen = ({navigation}) => {
  const shouldSetResponse = () => true;
  const onRelease = () => Keyboard.dismiss();

  const [email, setEmail] = useState('');

  return (
    <View
      style={styles.containerAll}
      onResponderRelease={onRelease}
      onStartShouldSetResponder={shouldSetResponse}>
      <BgImg />
      <BackBtn
        textHeader={'Forgot Password'}
        onClickBackBtn={() => navigation.navigate('Hi')}
      />
      <View style={styles.containerSecond}>
        <View style={styles.blurContainer}>
          <View style={styles.SecondInContainer}></View>
          <CustomInput
            name="Email"
            type="email-address"
            value={email}
            onchangetext={setEmail}
          />
          <CustomBtn text="Continue" isButtonAble={email.length > 0} />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  containerAll: {
    flex: 1,
  },
  containerSecond: {
    flex: 2,
  },
  blurContainer: {
    marginHorizontal: 5,
    backgroundColor: 'transparent',
    alignItems: 'center',
    paddingVertical: 20,
  },
  elementStyle: {
    color: '#fff',
    fontSize: 34,
    fontWeight: 'bold',
    paddingHorizontal: 30,
    paddingBottom: 30,
  },
  SecondInContainer: {
    position: 'absolute',
    opacity: 0.8,
    borderRadius: 20,
    backgroundColor: '#2D2B2C',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  textOrStyle: {
    color: '#ffff',
    fontSize: 19,
  },
  SignUpContainer: {
    flexDirection: 'row',
    width: '90%',
    paddingVertical: 10,
  },
  fontSizeColor: {
    fontSize: 19,
    color: '#ffff',
  },
  textSignUp: {
    color: '#20B98D',
    fontSize: 19,
    fontWeight: '900',
    marginHorizontal: 5,
  },
});
export default ForgotScreen;
