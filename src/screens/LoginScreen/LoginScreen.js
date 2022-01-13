import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, StatusBar, Keyboard} from 'react-native';
import BackBtn from '../../components/BackBtn';
import BgImg from '../../components/BgImage';
import CustomBtn from '../../components/CustomButton';
import CustomInput from '../../components/CustomTextInput';
import ForgotPassword from '../../components/Forgot';
import auth from '@react-native-firebase/auth';

const Login = ({route, navigation}) => {
  const shouldSetResponse = () => true;
  const onRelease = () => Keyboard.dismiss();

  const [hidePass, setHidePass] = useState(true);
  const [psw, setPsw] = useState('');
  const {email} = route.params;

  const [isButtonAble, setButtonAble] = useState(false);
  useEffect(() => {
    setButtonAble(psw.length > 0);
  }, [psw]);
  function login() {
    auth()
      .signInWithEmailAndPassword(email, psw)
      .then(response => {
        navigation.navigate('Home');
      })
      .catch(error => {
        alert(error.message);
      });
  }

  return (
    <View
      style={styles.containerAll}
      onResponderRelease={onRelease}
      onStartShouldSetResponder={shouldSetResponse}>
      <BgImg />
      <StatusBar hidden={true} />
      <View style={styles.containerFirst}>
        <View style={styles.backBtnContainer}>
          <BackBtn onclick={() => navigation.navigate('Hi')} />
        </View>
        <Text style={styles.elementStyle}>Login</Text>
      </View>
      <View style={styles.containerSecond}>
        <View style={styles.blurContainer}>
          <View style={styles.SecondInContainer}></View>
          <CustomInput
            value={psw}
            onchangetext={setPsw}
            name="Password"
            type="default"
            secure={hidePass}
          />
          <Text style={styles.inputText} onPress={() => setHidePass(!hidePass)}>
            {hidePass ? <Text>View</Text> : <Text>Hide</Text>}
          </Text>
          <CustomBtn
            isButtonAble={isButtonAble}
            click={login}
            text="Continue"
          />

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
  inputText: {
    color: '#000',
    position: 'absolute',
    top: 46,
    right: 40,
    fontSize: 17,
  },
});
export default Login;
