import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Keyboard,
} from 'react-native';
import {useEffect} from 'react/cjs/react.development';
import BackBtn from '../../components/BackBtn';
import BgImg from '../../components/BgImage';
import CustomBtn from '../../components/CustomButton';
import CustomInput from '../../components/CustomTextInput';
import ForgotPassword from '../../components/Forgot';
const Hi = ({navigation}) => {
  const shouldSetResponse = () => true;
  const onRelease = () => Keyboard.dismiss();

  const [email, setEmail] = useState('');
  const [isButtonAble, setButtonAble] = useState(false);

  useEffect(() => {
    setButtonAble(email.length > 0);
  }, [email]);
  return (
    <View
      style={styles.containerAll}
      onResponderRelease={onRelease}
      onStartShouldSetResponder={shouldSetResponse}>
      <BgImg />
      <StatusBar hidden={true} />
      <View style={styles.containerFirst}>
        <View style={styles.backBtnContainer}>
          <BackBtn />
        </View>
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
            isButtonAble={isButtonAble}
            text="Continue"
            click={() => navigation.navigate('Login', {email: email})}
          />
          <Text style={styles.textOrStyle}>or</Text>
          <View style={styles.SignUpContainer}>
            <Text style={styles.fontSizeColor}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Sign Up')}>
              <Text style={styles.textSignUp}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.forgotContainer}>
            <ForgotPassword text="Forgot your password?" />
          </View>
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
    justifyContent: 'space-between',
  },
  containerSecond: {
    flex: 2,
  },
  forgotContainer: {
    alignSelf: 'flex-start',
    marginHorizontal: 20,
  },
  blurContainer: {
    marginHorizontal: 5,
    backgroundColor: 'transparent',
    alignItems: 'center',
    paddingVertical: 20,
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
