import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Keyboard,
} from 'react-native';
import BgImg from '../../components/BgImage';
import CustomBtn from '../../components/CustomButton';
import CustomInput from '../../components/CustomTextInput';
import ForgotPassword from '../../components/Forgot';

const Hi = ({navigation}) => {
  const shouldSetResponse = () => true;
  const onRelease = () => Keyboard.dismiss();

  const [email, setEmail] = useState('');

  return (
    <View
      style={styles.containerAll}
      onResponderRelease={onRelease}
      onStartShouldSetResponder={shouldSetResponse}>
      <BgImg />
      <View style={styles.containerFirst}>
        <Text style={styles.elementStyle}>Hi</Text>
      </View>
      <View style={styles.containerSecond}>
        <View style={styles.blurContainer}>
          <View style={styles.SecondInContainer}></View>
          <CustomInput
            value={email}
            onchangetext={setEmail}
            name="Email"
            type="email-address"
          />
          <CustomBtn
            isButtonAble={email.length > 0}
            text="Continue"
            click={() => navigation.navigate('Login', {email})}
          />
          <Text style={styles.textOrStyle}>or</Text>
          <View style={styles.SignUpContainer}>
            <Text style={styles.fontSizeColor}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Sign Up')}>
              <Text style={styles.textSignUp}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          <ForgotPassword
            onClickForgotBtn={() => navigation.navigate('Forgot')}
            text="Forgot your password?"
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  containerAll: {
    flex: 1,
  },
  containerFirst: {
    flex: 1,
    justifyContent: 'flex-end',
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
export default Hi;
